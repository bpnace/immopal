const DRUPAL_API_BASE = process.env.DRUPAL_API_BASE ?? '';

if (!DRUPAL_API_BASE) {
  throw new Error('DRUPAL_API_BASE ist nicht gesetzt');
}

export type Listing = {
  id: string;
  title: string;
  slug: string;
  location: string;
  livingArea: number | null;
  plotArea: number | null;
  price: number | null;
  rooms: number | null;
  features: string[];
  shortDescription: string;
  longDescription: string;
  status: string;
  createdAt: string;
  images: string[];
};

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

type ListingAttributes = {
  title?: unknown;
  field_slug?: unknown;
  field_location?: unknown;
  field_living_area?: unknown;
  field_plot_area?: unknown;
  field_price?: unknown;
  field_rooms?: unknown;
  field_features?: unknown;
  field_short_description?: unknown;
  field_long_description?: unknown;
  field_status?: unknown;
  created?: unknown;
};

function coerceNumber(value: unknown): number | null {
  if (typeof value === 'number' && Number.isFinite(value)) return value;
  if (typeof value === 'string') {
    const normalized = value.replace(',', '.').trim();
    const n = Number.parseFloat(normalized);
    return Number.isFinite(n) ? n : null;
  }
  return null;
}

function firstNumber(value: unknown): number | null {
  if (Array.isArray(value)) return coerceNumber(value[0]);
  return coerceNumber(value);
}

function absolutizeDrupalUrl(url: string): string {
  try {
    return new URL(url, DRUPAL_API_BASE).toString();
  } catch {
    return url;
  }
}

function getString(value: unknown): string | null {
  return typeof value === 'string' ? value : null;
}

function getStringArray(value: unknown): string[] {
  return Array.isArray(value) ? value.map(getString).filter((v): v is string => Boolean(v)) : [];
}

function getProcessedHtml(value: unknown): string {
  if (!value || typeof value !== 'object') return '';
  const processed = (value as { processed?: unknown }).processed;
  return typeof processed === 'string' ? processed : '';
}

function extractFileUrls(
  included: JsonApiResource[] | undefined,
  relationshipData: JsonApiRelationship['data']
): string[] {
  if (!included || !relationshipData) return [];

  const dataArray = Array.isArray(relationshipData) ? relationshipData : [relationshipData];

  return dataArray
    .map((ref) => {
      if (!ref?.id || !ref?.type) return null;
      const resource = included.find((i) => i?.id === ref.id && i?.type === ref.type);
      if (!resource) return null;

      if (resource.type === 'file--file') {
        const uri = resource.attributes?.uri;
        const uriUrl = typeof uri === 'object' && uri ? (uri as { url?: unknown }).url : null;
        if (typeof uriUrl === 'string' && uriUrl.length > 0) return absolutizeDrupalUrl(uriUrl);
        return null;
      }

      if (String(resource.type).startsWith('media--')) {
        const relationships = resource.relationships ?? {};
        const mediaImageRel = relationships.field_media_image?.data ?? null;
        if (mediaImageRel) return extractFileUrls(included, mediaImageRel)[0] ?? null;

        const firstFileRel = Object.values(relationships).find((rel) => {
          const d = rel?.data ?? null;
          if (!d) return false;
          const first = Array.isArray(d) ? d[0] : d;
          return Boolean(first && (first as JsonApiResourceIdentifier).type === 'file--file');
        });
        if (firstFileRel?.data) return extractFileUrls(included, firstFileRel.data)[0] ?? null;
      }

      return null;
    })
    .filter((v): v is string => Boolean(v));
}

function mapListing(item: JsonApiResource, included?: JsonApiResource[]): Listing {
  const a = (item.attributes ?? {}) as ListingAttributes;
  const images = extractFileUrls(included, item.relationships?.field_main_image?.data ?? null);

  return {
    id: item.id,
    title: getString(a.title) ?? '',
    slug: getString(a.field_slug) ?? '',
    location: getString(a.field_location) ?? '',
    livingArea: firstNumber(a.field_living_area),
    plotArea: firstNumber(a.field_plot_area),
    price: a.field_price ? coerceNumber(a.field_price) : null,
    rooms: firstNumber(a.field_rooms),
    features: getStringArray(a.field_features),
    shortDescription: getProcessedHtml(a.field_short_description),
    longDescription: getProcessedHtml(a.field_long_description),
    status: getString(a.field_status) ?? '',
    createdAt: getString(a.created) ?? '',
    images,
  };
}

export async function fetchListings(): Promise<Listing[]> {
  const res = await fetch(`${DRUPAL_API_BASE}/jsonapi/node/listing?include=field_main_image`, {
    cache: 'no-store',
  });

  if (!res.ok) {
    throw new Error('Fehler beim Laden der Listings');
  }

  const json = (await res.json()) as { data?: unknown; included?: unknown };
  const data = Array.isArray(json.data) ? (json.data as JsonApiResource[]) : [];
  const included = Array.isArray(json.included) ? (json.included as JsonApiResource[]) : undefined;
  return data.map((item) => mapListing(item, included));
}

export async function fetchListingBySlug(slug: string): Promise<Listing | null> {
  const url =
    `${DRUPAL_API_BASE}/jsonapi/node/listing` +
    `?filter[field_slug]=${encodeURIComponent(slug)}` +
    `&include=field_main_image`;

  const res = await fetch(url, { cache: 'no-store' });

  if (!res.ok) {
    throw new Error('Fehler beim Laden des Listings');
  }

  const json = (await res.json()) as { data?: unknown; included?: unknown };
  const data = Array.isArray(json.data) ? (json.data as JsonApiResource[]) : [];
  const included = Array.isArray(json.included) ? (json.included as JsonApiResource[]) : undefined;
  const item = data[0];
  if (!item) return null;

  return mapListing(item, included);
}
