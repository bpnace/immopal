import type { Metadata } from 'next';
import './globals.css';
import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';
import { CookieBanner } from '@/components/cookie-banner';
import { WhatsAppButton } from '@/components/whatsapp-button';

export const metadata: Metadata = {
  title: 'immopal - Ihr Immobilienmakler in Berlin & Brandenburg',
  description:
    'Professionelle Immobilienvermittlung in Berlin und Brandenburg. Finden Sie Ihre Traumimmobilie mit immopal.',
  keywords: ['Immobilien', 'Makler', 'Berlin', 'Brandenburg', 'Wohnung kaufen', 'Haus kaufen'],
  authors: [{ name: 'immopal' }],
  openGraph: {
    type: 'website',
    locale: 'de_DE',
    url: 'https://immopal.de',
    title: 'immopal - Ihr Immobilienmakler in Berlin & Brandenburg',
    description: 'Professionelle Immobilienvermittlung in Berlin und Brandenburg.',
    siteName: 'immopal',
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
        <Navigation />
        <main className="flex-grow">{children}</main>
        <Footer />
        <CookieBanner />
        <WhatsAppButton />
      </body>
    </html>
  );
}
