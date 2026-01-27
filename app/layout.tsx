import type { Metadata } from 'next';
import './globals.css';
import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';
import { CookieBanner } from '@/components/cookie-banner';
import { WhatsAppButton } from '@/components/whatsapp-button';
import { OrganizationSchema } from '@/components/structured-data';
import { getSiteUrl } from '@/lib/site';

export const metadata: Metadata = {
  metadataBase: new URL(getSiteUrl()),
  alternates: {
    canonical: './',
  },
  title: {
    default: 'ImmoPal - Immobilien in Deutschland kaufen & verkaufen',
    template: '%s - ImmoPal',
  },
  description:
    'Professioneller Immobilienmakler für ganz Deutschland. Wohnung kaufen, Haus verkaufen deutschlandweit. Kostenlose Beratung & Bewertung in 48 Stunden. Jetzt anfragen!',
  keywords: [
    'Immobilien Deutschland',
    'Immobilien kaufen',
    'Haus verkaufen',
    'Wohnung kaufen',
    'Immobilienmakler Berlin',
    'Immobilienmakler Brandenburg',
    'Immobilienbewertung kostenlos',
  ],
  authors: [{ name: 'ImmoPal', url: getSiteUrl() }],
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
    url: getSiteUrl(),
    title: 'ImmoPal - Immobilien in Deutschland kaufen & verkaufen',
    description: 'Professioneller Immobilienmakler für Deutschland. Kostenlose Beratung & Bewertung.',
    siteName: 'ImmoPal',
    images: [
      {
        url: '/images/logo1.png',
        alt: 'ImmoPal - Ihr Immobilienmakler in Deutschland',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ImmoPal - Immobilien in Deutschland kaufen & verkaufen',
    description: 'Professioneller Immobilienmakler für Deutschland. Kostenlose Beratung & Bewertung.',
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
        {/* eslint-disable-next-line @next/next/next-script-for-ga */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-G1WJQEH62V"
        />
        {/* eslint-disable-next-line @next/next/next-script-for-ga */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-G1WJQEH62V');
            `,
          }}
        />
      </head>
      <body className="font-sans flex flex-col min-h-screen">
        <OrganizationSchema />
        <Navigation />
        <main className="flex-grow">{children}</main>
        <Footer />
        <CookieBanner />
        <WhatsAppButton />
      </body>
    </html>
  );
}
