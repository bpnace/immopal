export function getSiteUrl(): string {
  const fallback = 'https://www.immo-pal.de';
  const raw = process.env.NEXT_PUBLIC_SITE_URL ?? process.env.SITE_URL ?? fallback;
  const normalized = raw.trim().replace(/\/+$/, '');
  if (process.env.NODE_ENV === 'production' && /localhost|127\\.0\\.0\\.1/i.test(normalized)) {
    return fallback;
  }
  return normalized;
}
