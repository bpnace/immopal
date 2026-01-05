import type { Metadata } from 'next';
import { getSiteUrl } from '@/lib/site';

const siteUrl = getSiteUrl();

export const metadata: Metadata = {
  title: 'Immobilie kaufen in Deutschland - Kostenloser Suchauftrag',
  description:
    'Immobilie kaufen in Berlin, Brandenburg oder deutschlandweit. Nutzen Sie unseren kostenlosen Suchauftrag-Service und finden Sie Ihre Traumimmobilie. Jetzt starten!',
  openGraph: {
    title: 'Immobilie kaufen in Deutschland - immo-pal',
    description: 'Kostenloser Suchauftrag-Service für Ihre Traumimmobilie in ganz Deutschland.',
  },
  alternates: {
    canonical: `${siteUrl}/kaufen`,
  },
};

export default function KaufenLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
