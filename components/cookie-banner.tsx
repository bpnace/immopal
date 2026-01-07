'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

type CookieConsent = {
  necessary: boolean;
  analytics: boolean;
  marketing: boolean;
};

export function CookieBanner() {
  const [showBanner, setShowBanner] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [consent, setConsent] = useState<CookieConsent>({
    necessary: true, // Always true, cannot be disabled
    analytics: false,
    marketing: false,
  });

  useEffect(() => {
    // Check if user has already made a choice
    const savedConsent = localStorage.getItem('cookie-consent');
    if (!savedConsent) {
      setShowBanner(true);
    } else {
      setConsent(JSON.parse(savedConsent));
    }
  }, []);

  const saveConsent = (newConsent: CookieConsent) => {
    localStorage.setItem('cookie-consent', JSON.stringify(newConsent));
    localStorage.setItem('cookie-consent-date', new Date().toISOString());
    setConsent(newConsent);
    setShowBanner(false);
    setShowSettings(false);
    window.dispatchEvent(new CustomEvent('cookie-consent-updated', { detail: newConsent }));

    // Apply consent settings
    if (newConsent.analytics) {
      // Enable analytics (e.g., Plausible)
      console.log('Analytics enabled');
    }
    if (newConsent.marketing) {
      // Enable marketing cookies
      console.log('Marketing enabled');
    }
  };

  const acceptAll = () => {
    saveConsent({
      necessary: true,
      analytics: true,
      marketing: true,
    });
  };

  const acceptNecessary = () => {
    saveConsent({
      necessary: true,
      analytics: false,
      marketing: false,
    });
  };

  const acceptSelected = () => {
    saveConsent(consent);
  };

  if (!showBanner) {
    return null;
  }

  return (
    <>
      <div className="fixed inset-0 bg-black/50 z-[9998]" aria-hidden="true" />

      <div className="fixed bottom-0 left-0 right-0 z-[9999] bg-background border-t border-border shadow-lg">
        <div className="container mx-auto max-w-6xl p-6">
          {!showSettings ? (
            // Simple Banner
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <div className="flex-1">
                <h3 className="text-lg font-semibold mb-2">Cookie-Einstellungen</h3>
                <p className="text-sm text-muted-foreground">
                  Wir verwenden Cookies, um Ihnen ein optimales Webseiten-Erlebnis zu bieten. Dazu zählen Cookies,
                  die für den Betrieb der Seite notwendig sind, sowie optionale Cookies zur Analyse und Marketing.
                  Sie können selbst entscheiden, welche Kategorien Sie zulassen möchten.{' '}
                  <Link href="/datenschutz" className="text-primary hover:underline">
                    Mehr Details
                  </Link>
                </p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row">
                <button
                  onClick={() => setShowSettings(true)}
                  className="px-4 py-2 text-sm font-medium text-foreground bg-secondary hover:bg-secondary/80 rounded-md transition-colors"
                >
                  Einstellungen
                </button>
                <button
                  onClick={acceptNecessary}
                  className="px-4 py-2 text-sm font-medium text-foreground bg-muted hover:bg-muted/80 rounded-md transition-colors"
                >
                  Nur Notwendige
                </button>
                <button
                  onClick={acceptAll}
                  className="px-4 py-2 text-sm font-medium text-primary-foreground bg-primary hover:bg-primary/90 rounded-md transition-colors"
                >
                  Alle akzeptieren
                </button>
              </div>
            </div>
          ) : (
            // Detailed Settings
            <div>
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold">Cookie-Einstellungen anpassen</h3>
                <button
                  onClick={() => setShowSettings(false)}
                  className="text-muted-foreground hover:text-foreground"
                  aria-label="Zurück"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <div className="space-y-4 max-h-[60vh] overflow-y-auto">
                {/* Necessary Cookies */}
                <div className="border border-border rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-semibold">Notwendige Cookies</h4>
                    <span className="text-xs bg-muted px-2 py-1 rounded">Immer aktiv</span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Diese Cookies sind für die Grundfunktionen der Website erforderlich und können nicht deaktiviert
                    werden. Sie werden in der Regel nur als Reaktion auf von Ihnen vorgenommene Aktionen gesetzt, die
                    einer Anforderung von Diensten entsprechen, wie z.B. das Festlegen Ihrer Datenschutzeinstellungen
                    oder das Ausfüllen von Formularen.
                  </p>
                </div>

                {/* Analytics Cookies */}
                <div className="border border-border rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-semibold">Analyse-Cookies</h4>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        checked={consent.analytics}
                        onChange={(e) => setConsent({ ...consent, analytics: e.target.checked })}
                        className="sr-only peer"
                      />
                      <div className="w-11 h-6 bg-muted peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                    </label>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Diese Cookies ermöglichen es uns, Besuche und Traffic-Quellen zu zählen, damit wir die Leistung
                    unserer Website messen und verbessern können. Sie helfen uns zu verstehen, welche Seiten am
                    beliebtesten sind und wie Besucher sich auf der Website bewegen. Wir verwenden Plausible Analytics,
                    ein datenschutzfreundliches Tool, das keine personenbezogenen Daten erfasst.
                  </p>
                </div>

                {/* Marketing Cookies */}
                <div className="border border-border rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-semibold">Marketing-Cookies</h4>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        checked={consent.marketing}
                        onChange={(e) => setConsent({ ...consent, marketing: e.target.checked })}
                        className="sr-only peer"
                      />
                      <div className="w-11 h-6 bg-muted peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                    </label>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Diese Cookies können über unsere Website von unseren Werbepartnern gesetzt werden. Sie können von
                    diesen Unternehmen verwendet werden, um ein Profil Ihrer Interessen zu erstellen und Ihnen
                    relevante Anzeigen auf anderen Websites zu zeigen. Derzeit verwenden wir keine Marketing-Cookies.
                  </p>
                </div>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row mt-6">
                <button
                  onClick={acceptNecessary}
                  className="flex-1 px-4 py-2 text-sm font-medium text-foreground bg-muted hover:bg-muted/80 rounded-md transition-colors"
                >
                  Nur Notwendige
                </button>
                <button
                  onClick={acceptSelected}
                  className="flex-1 px-4 py-2 text-sm font-medium text-primary-foreground bg-primary hover:bg-primary/90 rounded-md transition-colors"
                >
                  Auswahl speichern
                </button>
                <button
                  onClick={acceptAll}
                  className="flex-1 px-4 py-2 text-sm font-medium text-primary-foreground bg-primary hover:bg-primary/90 rounded-md transition-colors"
                >
                  Alle akzeptieren
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
