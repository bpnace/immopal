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
          id="Cookiebot"
          src="https://consent.cookiebot.com/uc.js"
          strategy="beforeInteractive"
          data-cbid="f8b2a502-0199-4c01-abd1-6b759dd3db25"
          data-blockingmode="auto"
          type="text/javascript"
        />
        <Script
          id="google-consent-mode-default"
          strategy="beforeInteractive"
          data-cookieconsent="ignore"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag() {
                dataLayer.push(arguments);
              }
              gtag('consent', 'default', {
                ad_personalization: 'denied',
                ad_storage: 'denied',
                ad_user_data: 'denied',
                analytics_storage: 'denied',
                functionality_storage: 'denied',
                personalization_storage: 'denied',
                security_storage: 'granted',
                wait_for_update: 500,
              });
              gtag('set', 'ads_data_redaction', true);
              gtag('set', 'url_passthrough', false);
            `,
          }}
        />
        <Script
          id="gtag-js"
          strategy="beforeInteractive"
          data-cookieconsent="ignore"
          src="https://www.googletagmanager.com/gtag/js?id=G-G1WJQEH62V"
        />
        <Script
          id="gtag-config"
          strategy="beforeInteractive"
          data-cookieconsent="ignore"
          dangerouslySetInnerHTML={{
            __html: `
              gtag('js', new Date());
              gtag('config', 'G-G1WJQEH62V');
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
