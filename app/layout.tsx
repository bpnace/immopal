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
  title: {
    default: 'immo-pal - Immobilien in Deutschland kaufen & verkaufen',
    template: '%s - immo-pal',
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
  authors: [{ name: 'immo-pal', url: getSiteUrl() }],
  creator: 'immo-pal',
  publisher: 'immo-pal',
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
    title: 'immo-pal - Immobilien in Deutschland kaufen & verkaufen',
    description: 'Professioneller Immobilienmakler für Deutschland. Kostenlose Beratung & Bewertung.',
    siteName: 'immo-pal',
    images: [
      {
        url: '/images/logo1.png',
        alt: 'immo-pal - Ihr Immobilienmakler in Deutschland',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'immo-pal - Immobilien in Deutschland kaufen & verkaufen',
    description: 'Professioneller Immobilienmakler für Deutschland. Kostenlose Beratung & Bewertung.',
    images: ['/images/logo1.png'],
    creator: '@immopal',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
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
