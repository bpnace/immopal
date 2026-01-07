import { absolutizeDrupalUrl, fetchDrupal, getDrupalApiBase } from './drupal';

type JsonApiResourceIdentifier = {
  id: string;
  type: string;
};

type JsonApiRelationship = {
  data: JsonApiResourceIdentifier | JsonApiResourceIdentifier[] | null;
};

type JsonApiResource = {
  id: string;
  type: string;
  attributes?: Record<string, unknown>;
  relationships?: Record<string, JsonApiRelationship>;
};

type DrupalTextWithSummary = {
  value?: unknown;
  processed?: unknown;
  summary?: unknown;
};

function normalizeDrupalTextField(value: unknown): DrupalTextWithSummary | null {
  if (!value) return null;
  if (Array.isArray(value)) {
    const first = value.find((v) => v && typeof v === 'object');
    return first && typeof first === 'object' ? (first as DrupalTextWithSummary) : null;
  }
  if (typeof value === 'object') return value as DrupalTextWithSummary;
  return null;
}

export type Article = {
  id: string;
  nid: number | null;
  title: string;
  slug: string;
  bodyHtml: string;
  summaryText: string;
  imageUrl: string | null;
  tags: string[];
  createdAt: string;
};

function getString(value: unknown): string | null {
  return typeof value === 'string' ? value : null;
}

function getNumber(value: unknown): number | null {
  if (typeof value === 'number' && Number.isFinite(value)) return value;
  if (typeof value === 'string') {
    const n = Number.parseInt(value, 10);
    return Number.isFinite(n) ? n : null;
  }
  return null;
}

function getProcessedHtml(value: unknown): string {
  const text = normalizeDrupalTextField(value);
  if (!text) return '';
  const processed = text.processed;
  return typeof processed === 'string' ? processed : '';
}

function getSummaryText(value: unknown): string {
  const text = normalizeDrupalTextField(value);
  if (!text) return '';
  const summary = text.summary;
  const raw = typeof summary === 'string' ? summary : '';
  return raw.replace(/<[^>]+>/g, '').trim();
}

function extractFileUrl(included: JsonApiResource[] | undefined, relData: JsonApiRelationship['data']): string | null {
  if (!included || !relData) return null;
  const ref = Array.isArray(relData) ? relData[0] : relData;
  if (!ref) return null;

  const resource = included.find((i) => i.id === ref.id && i.type === ref.type);
  if (!resource) return null;

  // For image fields, Drupal commonly relates directly to file--file
  if (resource.type === 'file--file') {
    const uri = resource.attributes?.uri;
    const url = typeof uri === 'object' && uri ? (uri as { url?: unknown; value?: unknown }).url : null;
    const value = typeof uri === 'object' && uri ? (uri as { url?: unknown; value?: unknown }).value : null;
    const raw = (typeof url === 'string' && url.length > 0 ? url : null) ?? (typeof value === 'string' ? value : null);
    return raw ? absolutizeDrupalUrl(raw) : null;
  }

  return null;
}

function extractTagNames(included: JsonApiResource[] | undefined, relData: JsonApiRelationship['data']): string[] {
  if (!included || !relData) return [];
  const refs = Array.isArray(relData) ? relData : [relData];

  return refs
    .map((ref) => {
      if (!ref) return null;
      const term = included.find((i) => i.id === ref.id && i.type === ref.type);
      const name = term?.attributes?.name;
      return typeof name === 'string' ? name : null;
    })
    .filter((v): v is string => Boolean(v));
}

function deriveSlug(attributes: Record<string, unknown>): string {
  const fieldSlug = getString(attributes.field_slug);
  if (fieldSlug) return fieldSlug;

  const path = attributes.path;
  const alias = typeof path === 'object' && path ? (path as { alias?: unknown }).alias : null;
  if (typeof alias === 'string' && alias.length > 1) {
    const cleaned = alias.replace(/^\//, '');
    const lastSegment = cleaned.split('/').filter(Boolean).pop();
    if (lastSegment) return lastSegment;
  }

  const nid = getNumber(attributes.drupal_internal__nid);
  if (nid !== null) return String(nid);

  return '';
}

function mapArticle(item: JsonApiResource, included?: JsonApiResource[]): Article {
  const a = item.attributes ?? {};

  const rawTitle = getString(a.field_title) ?? getString(a.title) ?? '';
  const slug = deriveSlug(a) || item.id;
  const bodyHtml = getProcessedHtml(a.body);
  const summaryText =
    getSummaryText(a.body) || bodyHtml.replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').trim().slice(0, 240);

  return {
    id: item.id,
    nid: getNumber(a.drupal_internal__nid),
    title: rawTitle,
    slug,
    bodyHtml,
    summaryText,
    imageUrl: extractFileUrl(included, item.relationships?.field_image?.data ?? null),
    tags: extractTagNames(included, item.relationships?.field_tags?.data ?? null),
    createdAt: getString(a.created) ?? '',
  };
}

async function fetchJsonApi(url: string): Promise<{ data: JsonApiResource[]; included?: JsonApiResource[] }> {
  const res = await fetchDrupal(url, { cache: 'no-store' });
  if (!res.ok) {
    throw new Error(`Fehler beim Laden der Artikel (${res.status} ${res.statusText})`);
  }

  const json = (await res.json()) as { data?: unknown; included?: unknown };
  const data = Array.isArray(json.data) ? (json.data as JsonApiResource[]) : [];
  const included = Array.isArray(json.included) ? (json.included as JsonApiResource[]) : undefined;
  return { data, included };
}

export async function fetchArticles(limit = 24): Promise<Article[]> {
  const base = getDrupalApiBase();
  if (!base) return [];
  const url =
    `${base}/jsonapi/node/article` +
    `?include=field_image,field_tags` +
    `&sort=-created` +
    `&page%5Blimit%5D=${encodeURIComponent(String(limit))}`;

  const { data, included } = await fetchJsonApi(url);
  return data.map((item) => mapArticle(item, included));
}

export async function fetchArticleBySlug(slug: string): Promise<Article | null> {
  const base = getDrupalApiBase();
  if (!base) return null;
  // 1) If slug looks like a UUID, try direct fetch by id.
  if (/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(slug)) {
    const url = `${base}/jsonapi/node/article/${encodeURIComponent(slug)}?include=field_image,field_tags`;
    const { data, included } = await fetchJsonApi(url);
    const item = data[0];
    return item ? mapArticle(item, included) : null;
  }

  // 2) If slug is numeric, attempt to filter by nid.
  if (/^\d+$/.test(slug)) {
    const url =
      `${base}/jsonapi/node/article` +
      `?include=field_image,field_tags` +
      `&filter[drupal_internal__nid]=${encodeURIComponent(slug)}`;
    const { data, included } = await fetchJsonApi(url);
    const item = data[0];
    if (item) return mapArticle(item, included);
  }

  // 3) Fallback: fetch a page and match by derived slug.
  const candidates = await fetchArticles(50);
  return candidates.find((a) => a.slug === slug) ?? null;
}
