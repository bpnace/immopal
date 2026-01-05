export function getDrupalApiBase(): string | null {
  // NEXT_PUBLIC_ is required for client-side access (static export)
  const raw = process.env.NEXT_PUBLIC_DRUPAL_API_BASE || process.env.DRUPAL_API_BASE;
  if (typeof raw !== 'string') return null;
  const normalized = raw.trim().replace(/\/+$/, '');
  return normalized.length > 0 ? normalized : null;
}

export function assertBrowserCanRequestUrl(url: string): void {
  let parsed: URL;
  try {
    parsed = new URL(url);
  } catch {
    throw new Error(`Ungültige URL: "${url}"`);
  }

  if (typeof window !== 'undefined' && window.location.protocol === 'https:' && parsed.protocol === 'http:') {
    throw new Error(
      `Mixed Content: Seite läuft über HTTPS, aber die Drupal API URL ist HTTP ("${url}"). ` +
        `Browser blockieren solche Requests. Stelle Drupal (bzw. Proxy) auf HTTPS um.`
    );
  }
}

export async function fetchDrupal(url: string, init?: RequestInit): Promise<Response> {
  assertBrowserCanRequestUrl(url);
  try {
    return await fetch(url, init);
  } catch (err) {
    const message = err instanceof Error ? err.message : String(err);
    throw new Error(
      `Failed to fetch "${url}": ${message}. ` +
        `Typische Ursachen: CORS (Access-Control-Allow-Origin), Network/Port unreachable oder Mixed Content (HTTPS vs HTTP).`
    );
  }
}

export function absolutizeDrupalUrl(url: string): string {
  const base = getDrupalApiBase();
  if (!base) return url;
  try {
    return new URL(url, base).toString();
  } catch {
    return url;
  }
}
