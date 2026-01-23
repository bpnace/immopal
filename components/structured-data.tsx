import { getSiteUrl } from '@/lib/site';

export function OrganizationSchema() {
  const siteUrl = getSiteUrl();
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'RealEstateAgent',
    name: 'immo-pal',
    description: 'Professioneller Immobilienmakler für Deutschland',
    url: siteUrl,
    logo: `${siteUrl}/images/logo1.png`,
    image: `${siteUrl}/images/hero1.webp`,
    telephone: '+493046690542',
    email: 'info@immo-pal.de',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Genfenbergstraße 23',
      addressLocality: 'Berlin',
      addressRegion: 'Berlin',
      postalCode: '13595',
      addressCountry: 'DE',
    },
    areaServed: [
      {
        '@type': 'Country',
        name: 'Deutschland',
      },
    ],
    sameAs: ['https://www.instagram.com/immo.pal', 'https://wa.me/493046690542'],
  };

  return (
    <script
      id="organization-schema"
      type="application/ld+json"
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
