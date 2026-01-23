export function getSiteUrl(): string {
  const raw = process.env.NEXT_PUBLIC_SITE_URL ?? process.env.SITE_URL ?? 'https://www.immo-pal.de';
  return raw.trim().replace(/\/+$/, '');
}

