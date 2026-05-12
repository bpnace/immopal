'use client';

import { useCallback, useEffect, useMemo, useState } from 'react';

type Props = {
  address: string;
  heightClassName?: string;
};

type CCM19Api = {
  consent?: boolean;
  fullConsentGiven?: boolean;
  acceptedEmbeddings?: { id: string; name: string }[];
  openWidget?: () => void;
};

declare global {
  interface Window {
    CCM?: CCM19Api;
  }
}

export function DsgvoGoogleMaps({
  address,
  heightClassName = 'h-64',
}: Props) {
  const [hasConsent, setHasConsent] = useState(false);

  const resolveConsent = useCallback(() => {
    const ccm = window.CCM;
    if (!ccm) return false;
    if (ccm.fullConsentGiven) return true;
    return Boolean(ccm.acceptedEmbeddings && ccm.acceptedEmbeddings.length > 0);
  }, []);

  useEffect(() => {
    setHasConsent(resolveConsent());
  }, [resolveConsent]);

  useEffect(() => {
    function handleConsentUpdate() {
      setHasConsent(resolveConsent());
    }

    window.addEventListener('ccm19WidgetLoaded', handleConsentUpdate);
    window.addEventListener('ccm19WidgetClosed', handleConsentUpdate);
    window.addEventListener('ccm19EmbeddingAccepted', handleConsentUpdate);

    return () => {
      window.removeEventListener('ccm19WidgetLoaded', handleConsentUpdate);
      window.removeEventListener('ccm19WidgetClosed', handleConsentUpdate);
      window.removeEventListener('ccm19EmbeddingAccepted', handleConsentUpdate);
    };
  }, [resolveConsent]);

  const mapSrc = useMemo(() => {
    const encoded = encodeURIComponent(address);
    return `https://www.google.com/maps?q=${encoded}&output=embed`;
  }, [address]);

  const mapLink = useMemo(() => {
    const encoded = encodeURIComponent(address);
    return `https://www.google.com/maps/search/?api=1&query=${encoded}`;
  }, [address]);

  function openConsentManager() {
    window.CCM?.openWidget?.();
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
              onClick={openConsentManager}
              className="inline-flex items-center rounded-md bg-background/90 border border-border px-3 py-2 text-xs font-medium text-foreground hover:bg-background"
            >
              Cookie-Einstellungen öffnen
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
                onClick={openConsentManager}
                className="inline-flex items-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90"
              >
                Einwilligung verwalten
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
              Für die eingebettete Karte ist Ihre Cookie-Einwilligung erforderlich. Beim Laden können Daten an
              Google (USA) übertragen werden.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
