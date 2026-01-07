export function getDrupalApiBase(): string | null {
  // NEXT_PUBLIC_ is required for client-side access (static export)
  const raw =
    process.env.NEXT_PUBLIC_DRUPAL_API_BASE ||
    process.env.DRUPAL_API_BASE ||
    process.env.NEXT_PUBLIC_DRUPAL_BASE_URL ||
    process.env.DRUPAL_BASE_URL;
  if (typeof raw !== 'string') return null;
  const normalized = raw.trim().replace(/\/+$/, '');
  return normalized.length > 0 ? normalized : null;
}

function getDrupalFileBase(): string | null {
  const rawFileBase = process.env.NEXT_PUBLIC_DRUPAL_FILE_BASE || process.env.DRUPAL_FILE_BASE;
  if (typeof rawFileBase === 'string' && rawFileBase.trim().length > 0) {
    try {
      const parsed = new URL(rawFileBase.trim().replace(/\/+$/, ''));
      const basePath = parsed.pathname.replace(/\/+$/, '');
      return `${parsed.origin}${basePath}`;
    } catch {
      return rawFileBase.trim().replace(/\/+$/, '');
    }
  }

  const apiBase = getDrupalApiBase();
  if (!apiBase) return null;
  try {
    const parsed = new URL(apiBase);
    parsed.pathname = '/';
    parsed.search = '';
    parsed.hash = '';
    if (parsed.port && parsed.port !== '80' && parsed.port !== '443') {
      parsed.port = '';
    }
    return parsed.origin;
  } catch {
    return apiBase;
  }
}

function joinFileBase(fileBase: string, path: string): string {
  try {
    const baseUrl = new URL(fileBase);
    const hasBasePath = baseUrl.pathname && baseUrl.pathname !== '/' && baseUrl.pathname !== '';
    const normalized = path.startsWith('/') ? path : `/${path}`;
    if (!hasBasePath) {
      return new URL(normalized, baseUrl.origin).toString();
    }
    const baseWithSlash = fileBase.endsWith('/') ? fileBase : `${fileBase}/`;
    const relative = normalized.replace(/^\/+/, '');
    return new URL(relative, baseWithSlash).toString();
  } catch {
    return path;
  }
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
  const raw = url.trim();
  if (!raw) return url;
  const fileBase = getDrupalFileBase();
  if (!fileBase) return url;

  if (/^https?:\/\//i.test(raw)) {
    try {
      const parsed = new URL(raw);
      const pathWithQuery = `${parsed.pathname}${parsed.search}${parsed.hash}`;
      return joinFileBase(fileBase, pathWithQuery);
    } catch {
      return raw;
    }
  }

  const publicPrefix = 'public://';
  if (raw.startsWith(publicPrefix)) {
    const relativePath = raw.slice(publicPrefix.length).replace(/^\/+/, '');
    return joinFileBase(fileBase, `/sites/default/files/${relativePath}`);
  }

  try {
    return joinFileBase(fileBase, raw);
  } catch {
    return url;
  }
}
