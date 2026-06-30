import type { Metadata } from 'next';
import Script from 'next/script';
import './globals.css';
import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';
import { WhatsAppButton } from '@/components/whatsapp-button';
import { OrganizationSchema } from '@/components/structured-data';
import { getSiteUrl } from '@/lib/site';

const siteUrl = getSiteUrl();

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  alternates: {
    canonical: `${siteUrl}/`,
  },
  title: {
    default: 'Immobilien in Berlin & Brandenburg kaufen & verkaufen',
    template: '%s - ImmoPal',
  },
  description:
    'Wohnung oder Haus in Berlin & Brandenburg verkaufen? Kostenlose Immobilienbewertung, unabhängige Zweitmeinung und strukturierter Verkaufsprozess ohne Verkaufsdruck.',
  keywords: [
    'Immobilien Berlin',
    'Immobilien Brandenburg',
    'Immobilien kaufen',
    'Haus verkaufen',
    'Wohnung kaufen',
    'Immobilienmakler Berlin',
    'Immobilienmakler Brandenburg',
    'Immobilienbewertung kostenlos',
  ],
  authors: [{ name: 'ImmoPal', url: siteUrl }],
  creator: 'ImmoPal',
  publisher: 'ImmoPal',
  icons: {
    icon: '/favicon.ico',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'de_DE',
    url: `${siteUrl}/`,
    title: 'Immobilien in Berlin & Brandenburg kaufen & verkaufen',
    description:
      'Wohnung oder Haus in Berlin & Brandenburg verkaufen? Kostenlose Immobilienbewertung, unabhängige Zweitmeinung und strukturierter Verkaufsprozess ohne Verkaufsdruck.',
    siteName: 'ImmoPal',
    images: [
      {
        url: '/images/logo1.png',
        alt: 'ImmoPal - Ihr Immobilienmakler in Berlin & Brandenburg',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Immobilien in Berlin & Brandenburg kaufen & verkaufen',
    description:
      'Wohnung oder Haus in Berlin & Brandenburg verkaufen? Kostenlose Immobilienbewertung, unabhängige Zweitmeinung und strukturierter Verkaufsprozess ohne Verkaufsdruck.',
    images: ['/images/logo1.png'],
    creator: '@immo-pal',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <head>
        <Script
          id="CCM19"
          src="https://cloud.ccm19.de/app.js?apiKey=19757b1aa9456ce5cbb106086bf0cec7953a0ab53aa977e1&domain=69c11469b0a8fd5a220a28d2"
          strategy="afterInteractive"
          referrerPolicy="origin"
        />
        <Script
          id="google-consent-mode-default"
          strategy="beforeInteractive"
          data-cookieconsent="ignore"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              window.gtag = window.gtag || function gtag() {
                window.dataLayer.push(arguments);
              }
              window.gtag('consent', 'default', {
                ad_personalization: 'denied',
                ad_storage: 'denied',
                ad_user_data: 'denied',
                analytics_storage: 'denied',
                functionality_storage: 'denied',
                personalization_storage: 'denied',
                security_storage: 'granted',
                wait_for_update: 500,
              });
              window.gtag('set', 'ads_data_redaction', true);
              window.gtag('set', 'url_passthrough', false);
            `,
          }}
        />
        <Script
          id="gtag-js"
          strategy="afterInteractive"
          data-cookieconsent="ignore"
          src="https://www.googletagmanager.com/gtag/js?id=G-G1WJQEH62V"
        />
        <Script
          id="google-consent-mode-ccm19-sync"
          strategy="afterInteractive"
          data-cookieconsent="ignore"
          dangerouslySetInnerHTML={{
            __html: `
              (function () {
                var measurementId = 'G-G1WJQEH62V';
                var analyticsPattern = /google analytics|analytics|gtag|google tag|google ads|ads conversion|G-G1WJQEH62V/i;

                function getStoredConsent() {
                  try {
                    var raw = window.localStorage && window.localStorage.getItem('ccm_consent');
                    if (!raw) return null;

                    var parsed = JSON.parse(raw);
                    var paths = ['/', window.location.pathname];
                    var consent = null;

                    for (var i = 0; i < paths.length; i += 1) {
                      if (parsed && parsed[paths[i]]) {
                        consent = parsed[paths[i]];
                        break;
                      }
                    }

                    if (!consent && parsed && typeof parsed === 'object') {
                      var firstKey = Object.keys(parsed)[0];
                      consent = parsed[firstKey];
                    }

                    return consent || null;
                  } catch (_error) {
                    return null;
                  }
                }

                function entryMatchesAnalytics(entry) {
                  if (!entry) return false;
                  if (typeof entry === 'string') return analyticsPattern.test(entry);
                  return analyticsPattern.test(
                    [entry.id, entry.name, entry.code, entry.purpose].filter(Boolean).join(' ')
                  );
                }

                function hasAnalyticsConsent() {
                  var storedConsent = getStoredConsent();

                  if (storedConsent) {
                    if (storedConsent.clickedButton === 'acceptAll') return true;
                    if (storedConsent.clickedButton === 'decline') return false;
                  }

                  var ccm = window.CCM;
                  if (!ccm || ccm.consent !== true) return false;

                  var acceptedCookies = Array.isArray(ccm.acceptedCookies) ? ccm.acceptedCookies : [];
                  var acceptedEmbeddings = Array.isArray(ccm.acceptedEmbeddings) ? ccm.acceptedEmbeddings : [];

                  return acceptedCookies.some(entryMatchesAnalytics) || acceptedEmbeddings.some(entryMatchesAnalytics);
                }

                function syncGoogleConsentFromCcm19() {
                  window.dataLayer = window.dataLayer || [];
                  window.gtag = window.gtag || function gtag() {
                    window.dataLayer.push(arguments);
                  };

                  var granted = hasAnalyticsConsent();
                  var consentState = granted ? 'granted' : 'denied';

                  window.gtag('consent', 'update', {
                    ad_personalization: consentState,
                    ad_storage: consentState,
                    ad_user_data: consentState,
                    analytics_storage: consentState,
                    functionality_storage: 'denied',
                    personalization_storage: 'denied',
                    security_storage: 'granted',
                  });

                  if (
                    granted &&
                    window.__immoPalGoogleConsentState !== consentState &&
                    window.__immoPalGoogleTagConfigured
                  ) {
                    window.gtag('config', measurementId, {
                      page_path: window.location.pathname + window.location.search,
                    });
                  }

                  window.__immoPalGoogleConsentState = consentState;
                }

                window.addEventListener('ccm19WidgetLoaded', syncGoogleConsentFromCcm19);
                window.addEventListener('ccm19WidgetClosed', syncGoogleConsentFromCcm19);
                window.addEventListener('ccm19EmbeddingAccepted', syncGoogleConsentFromCcm19);
                syncGoogleConsentFromCcm19();
              })();
            `,
          }}
        />
        <Script
          id="gtag-config"
          strategy="afterInteractive"
          data-cookieconsent="ignore"
          dangerouslySetInnerHTML={{
            __html: `
              window.gtag('js', new Date());
              window.gtag('config', 'G-G1WJQEH62V');
              window.__immoPalGoogleTagConfigured = true;
            `,
          }}
        />
      </head>
      <body className="font-sans flex flex-col min-h-screen">
        <OrganizationSchema />
        <Navigation />
        <div className="flex-grow">{children}</div>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
