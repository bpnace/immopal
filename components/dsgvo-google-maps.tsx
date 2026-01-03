'use client';

import { useEffect, useMemo, useState } from 'react';

type Props = {
  address: string;
  storageKey?: string;
  heightClassName?: string;
};

export function DsgvoGoogleMaps({
  address,
  storageKey = 'maps:google:consent',
  heightClassName = 'h-64',
}: Props) {
  const [hasConsent, setHasConsent] = useState(false);

  useEffect(() => {
    try {
      setHasConsent(window.localStorage.getItem(storageKey) === 'true');
    } catch {
      setHasConsent(false);
    }
  }, [storageKey]);

  const mapSrc = useMemo(() => {
    const encoded = encodeURIComponent(address);
    return `https://www.google.com/maps?q=${encoded}&output=embed`;
  }, [address]);

  const mapLink = useMemo(() => {
    const encoded = encodeURIComponent(address);
    return `https://www.google.com/maps/search/?api=1&query=${encoded}`;
  }, [address]);

  function enable() {
    setHasConsent(true);
    try {
      window.localStorage.setItem(storageKey, 'true');
    } catch {
      // ignore
    }
  }

  function disable() {
    setHasConsent(false);
    try {
      window.localStorage.setItem(storageKey, 'false');
    } catch {
      // ignore
    }
  }

  return (
    <div className="bg-card border border-border rounded-lg overflow-hidden">
      {hasConsent ? (
        <div className={`relative ${heightClassName}`}>
          <iframe
            title={`Google Maps – ${address}`}
            src={mapSrc}
            className="absolute inset-0 h-full w-full"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
          <div className="absolute bottom-3 left-3 right-3 flex flex-wrap items-center justify-between gap-2">
            <a
              href={mapLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded-md bg-background/90 border border-border px-3 py-2 text-xs font-medium text-foreground hover:bg-background"
            >
              In Google Maps öffnen
            </a>
            <button
              type="button"
              onClick={disable}
              className="inline-flex items-center rounded-md bg-background/90 border border-border px-3 py-2 text-xs font-medium text-foreground hover:bg-background"
            >
              Einwilligung widerrufen
            </button>
          </div>
        </div>
      ) : (
        <div className={`bg-muted flex items-center justify-center ${heightClassName}`}>
          <div className="px-6 text-center space-y-3">
            <p className="text-muted-foreground">
              Karte deaktiviert (DSGVO).
              <br />
              Erst nach Einwilligung wird Google Maps geladen.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <button
                type="button"
                onClick={enable}
                className="inline-flex items-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90"
              >
                Karte laden
              </button>
              <a
                href={mapLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center rounded-md bg-background border border-border px-4 py-2 text-sm font-medium hover:border-foreground"
              >
                In Google Maps öffnen
              </a>
            </div>
            <p className="text-xs text-muted-foreground">
              Beim Laden der Karte können Daten an Google (USA) übertragen werden.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

