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

function extractFileUrls(included: any[] | undefined, relationshipData: any): string[] {
  if (!included || !relationshipData) return [];

  const dataArray = Array.isArray(relationshipData) ? relationshipData : [relationshipData];

  return dataArray
    .map((ref) => {
      if (!ref?.id || !ref?.type) return null;
      const resource = included.find((i) => i?.id === ref.id && i?.type === ref.type);
      if (!resource) return null;

      if (resource.type === 'file--file') {
        const uriUrl = resource.attributes?.uri?.url;
        if (typeof uriUrl === 'string' && uriUrl.length > 0) return absolutizeDrupalUrl(uriUrl);
        return null;
      }

      if (String(resource.type).startsWith('media--')) {
        const relationships = resource.relationships ?? {};
        const mediaImageRel = relationships.field_media_image?.data;
        if (mediaImageRel) return extractFileUrls(included, mediaImageRel)[0] ?? null;

        const firstFileRel = Object.values(relationships).find((rel: any) => {
          const d = rel?.data;
          if (!d) return false;
          const first = Array.isArray(d) ? d[0] : d;
          return first?.type === 'file--file';
        }) as any;
        if (firstFileRel?.data) return extractFileUrls(included, firstFileRel.data)[0] ?? null;
      }

      return null;
    })
    .filter((v): v is string => Boolean(v));
}

function mapListing(item: any, included?: any[]): Listing {
  const a = item.attributes;
  const images = extractFileUrls(included, item.relationships?.field_main_image?.data);

  return {
    id: item.id,
    title: a.title,
    slug: a.field_slug,
    location: a.field_location,
    livingArea: firstNumber(a.field_living_area),
    plotArea: firstNumber(a.field_plot_area),
    price: a.field_price ? coerceNumber(a.field_price) : null,
    rooms: firstNumber(a.field_rooms),
    features: a.field_features ?? [],
    shortDescription: a.field_short_description?.processed ?? '',
    longDescription: a.field_long_description?.processed ?? '',
    status: a.field_status,
    createdAt: a.created,
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

  const json = await res.json();
  return (json.data ?? []).map((item: any) => mapListing(item, json.included));
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

  const json = await res.json();
  const item = json.data?.[0];
  if (!item) return null;

  return mapListing(item, json.included);
}
