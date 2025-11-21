import { Property } from './types';

// Mock data for demo purposes - will be replaced with CMS data later
export const mockProperties: Property[] = [
  {
    id: '1',
    title: 'Moderne 3-Zimmer-Wohnung mit Balkon in Berlin Mitte',
    slug: 'moderne-3-zimmer-wohnung-berlin-mitte',
    status: 'available',
    featured: true,
    category: 'wohnung',
    description:
      'Traumhafte 3-Zimmer-Wohnung im Herzen von Berlin Mitte. Die lichtdurchflutete Wohnung besticht durch ihre moderne Ausstattung und den großzügigen Schnitt. Der sonnige Südbalkon bietet einen herrlichen Ausblick über die Dächer Berlins. Die Küche ist vollausgestattet mit hochwertigen Einbaugeräten. Das Badezimmer verfügt über eine ebenerdige Dusche und Fußbodenheizung. Die Wohnung befindet sich im 3. OG eines gepflegten Altbaus mit Fahrstuhl.',
    price: 485000,
    rooms: 3,
    livingArea: 85,
    bedrooms: 2,
    bathrooms: 1,
    floor: '3',
    constructionYear: 1920,
    location: {
      street: 'Torstraße',
      houseNumber: '123',
      postalCode: '10119',
      city: 'Berlin',
      district: 'Mitte',
      state: 'berlin',
      coordinates: {
        lat: 52.5294,
        lng: 13.3982,
      },
    },
    energyCertificate: {
      type: 'demand',
      value: '85 kWh/(m²·a)',
      class: 'C',
      validUntil: '2033-12-31',
    },
    features: [
      'Balkon',
      'Einbauküche',
      'Fußbodenheizung',
      'Fahrstuhl',
      'Parkett',
      'Denkmalschutz',
      'Renoviert',
      'Zentrale Lage',
    ],
    images: [
      {
        url: 'https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg',
        alt: 'Modernes Wohnzimmer mit großen Fenstern',
        caption: 'Helles Wohnzimmer mit Parkettboden',
      },
      {
        url: 'https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg',
        alt: 'Moderne Küche',
        caption: 'Vollausgestattete Einbauküche',
      },
      {
        url: 'https://images.pexels.com/photos/1454804/pexels-photo-1454804.jpeg',
        alt: 'Schlafzimmer',
        caption: 'Gemütliches Schlafzimmer',
      },
      {
        url: 'https://images.pexels.com/photos/1454806/pexels-photo-1454806.jpeg',
        alt: 'Badezimmer',
        caption: 'Modernes Badezimmer mit Fußbodenheizung',
      },
    ],
    seo: {
      metaTitle: '3-Zimmer-Wohnung Berlin Mitte kaufen | 85m² | immopal',
      metaDescription:
        'Moderne 3-Zimmer-Wohnung mit Balkon in Berlin Mitte zu verkaufen. 85m², 3. OG, Einbauküche, Fahrstuhl. Jetzt besichtigen!',
    },
    createdAt: '2024-01-15T10:00:00Z',
    updatedAt: '2024-01-15T10:00:00Z',
  },
  {
    id: '2',
    title: 'Charmantes Einfamilienhaus in Potsdam mit großem Garten',
    slug: 'einfamilienhaus-potsdam-garten',
    status: 'available',
    featured: true,
    category: 'haus',
    description:
      'Wunderschönes freistehendes Einfamilienhaus in ruhiger Lage in Potsdam-Babelsberg. Das Haus wurde 2015 kernsaniert und bietet auf zwei Etagen großzügigen Wohnraum für die ganze Familie. Der ca. 450m² große Garten lädt zum Entspannen ein und bietet viel Platz für Kinder zum Spielen. Im Erdgeschoss befinden sich ein lichtdurchflutetes Wohnzimmer mit offenem Kamin, eine moderne Wohnküche und ein Gästebad. Im Obergeschoss liegen drei Schlafzimmer und ein großes Badezimmer mit Badewanne und Dusche.',
    price: 725000,
    rooms: 5,
    livingArea: 145,
    plotSize: 450,
    bedrooms: 3,
    bathrooms: 2,
    floor: 'Erdgeschoss + 1. OG',
    constructionYear: 1968,
    location: {
      street: 'Karl-Liebknecht-Straße',
      houseNumber: '45',
      postalCode: '14482',
      city: 'Potsdam',
      district: 'Babelsberg',
      state: 'brandenburg',
      coordinates: {
        lat: 52.3906,
        lng: 13.0989,
      },
    },
    energyCertificate: {
      type: 'demand',
      value: '72 kWh/(m²·a)',
      class: 'B',
      validUntil: '2034-06-30',
    },
    features: [
      'Garten',
      'Kamin',
      'Einbauküche',
      'Keller',
      'Garage',
      'Terrasse',
      'Fußbodenheizung',
      'Vollständig saniert',
      'Ruhige Lage',
    ],
    images: [
      {
        url: 'https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg',
        alt: 'Einfamilienhaus Außenansicht',
        caption: 'Freistehendes Einfamilienhaus in ruhiger Lage',
      },
      {
        url: 'https://images.pexels.com/photos/1648768/pexels-photo-1648768.jpeg',
        alt: 'Wohnzimmer mit Kamin',
        caption: 'Gemütliches Wohnzimmer mit offenem Kamin',
      },
      {
        url: 'https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg',
        alt: 'Moderne Wohnküche',
        caption: 'Offene Wohnküche mit Essbereich',
      },
      {
        url: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg',
        alt: 'Großer Garten',
        caption: 'Idyllischer Garten mit Terrasse',
      },
    ],
    seo: {
      metaTitle: 'Einfamilienhaus Potsdam kaufen | 145m² | Großer Garten | immopal',
      metaDescription:
        'Charmantes Einfamilienhaus in Potsdam-Babelsberg zu verkaufen. 145m² Wohnfläche, 450m² Garten, 5 Zimmer. Jetzt besichtigen!',
    },
    createdAt: '2024-01-10T14:00:00Z',
    updatedAt: '2024-01-10T14:00:00Z',
  },
  {
    id: '3',
    title: 'Luxuriöse Penthouse-Wohnung mit Dachterrasse in Prenzlauer Berg',
    slug: 'penthouse-wohnung-prenzlauer-berg-dachterrasse',
    status: 'available',
    featured: true,
    category: 'wohnung',
    description:
      'Exklusive Penthouse-Wohnung in einer der begehrtesten Lagen Berlins. Diese außergewöhnliche Wohnung erstreckt sich über zwei Etagen und bietet höchsten Wohnkomfort. Die großzügige Dachterrasse von ca. 60m² bietet einen atemberaubenden Blick über die Dächer von Prenzlauer Berg. Die Wohnung überzeugt durch ihre hochwertige Ausstattung mit Echtholzparkett, bodentiefen Fenstern und einer Designer-Küche. Das Master-Bedroom verfügt über ein eigenes En-Suite-Badezimmer mit freistehender Badewanne.',
    price: 1250000,
    rooms: 4,
    livingArea: 165,
    bedrooms: 3,
    bathrooms: 2,
    floor: '5. OG + Dachgeschoss',
    constructionYear: 2018,
    location: {
      street: 'Kollwitzstraße',
      houseNumber: '78',
      postalCode: '10435',
      city: 'Berlin',
      district: 'Prenzlauer Berg',
      state: 'berlin',
      coordinates: {
        lat: 52.5321,
        lng: 13.4196,
      },
    },
    energyCertificate: {
      type: 'demand',
      value: '45 kWh/(m²·a)',
      class: 'A',
      validUntil: '2035-12-31',
    },
    features: [
      'Dachterrasse',
      'Penthouse',
      'Einbauküche',
      'Fußbodenheizung',
      'Fahrstuhl',
      'Smart Home',
      'Parkett',
      'Neubau',
      'Tiefgarage',
      'Videogegensprechanlage',
    ],
    images: [
      {
        url: 'https://images.pexels.com/photos/1571463/pexels-photo-1571463.jpeg',
        alt: 'Luxuriöses Wohnzimmer',
        caption: 'Offener Wohn- und Essbereich mit bodentiefen Fenstern',
      },
      {
        url: 'https://images.pexels.com/photos/1643389/pexels-photo-1643389.jpeg',
        alt: 'Dachterrasse mit Blick',
        caption: 'Großzügige Dachterrasse mit Panoramablick',
      },
      {
        url: 'https://images.pexels.com/photos/2510067/pexels-photo-2510067.jpeg',
        alt: 'Designer Küche',
        caption: 'Hochwertige Einbauküche mit Miele-Geräten',
      },
      {
        url: 'https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg',
        alt: 'Master Bedroom',
        caption: 'Geräumiges Schlafzimmer mit En-Suite-Bad',
      },
    ],
    seo: {
      metaTitle: 'Penthouse Berlin Prenzlauer Berg | 165m² | Dachterrasse | immopal',
      metaDescription:
        'Luxuriöse Penthouse-Wohnung in Prenzlauer Berg zu verkaufen. 165m², 60m² Dachterrasse, 4 Zimmer, Smart Home. Jetzt besichtigen!',
    },
    createdAt: '2024-01-20T09:00:00Z',
    updatedAt: '2024-01-20T09:00:00Z',
  },
  {
    id: '4',
    title: 'Gemütliche 2-Zimmer-Wohnung in Kreuzberg',
    slug: '2-zimmer-wohnung-kreuzberg',
    status: 'reserved',
    featured: false,
    category: 'wohnung',
    description:
      'Charmante 2-Zimmer-Altbauwohnung im lebendigen Kreuzberg. Die Wohnung befindet sich im 2. OG eines typischen Berliner Altbaus und wurde liebevoll saniert. Hohe Decken und Stuck verleihen der Wohnung einen besonderen Charme. Die Wohnung eignet sich perfekt für Singles oder Paare, die das urbane Leben lieben und zentral wohnen möchten.',
    price: 325000,
    rooms: 2,
    livingArea: 62,
    bedrooms: 1,
    bathrooms: 1,
    floor: '2',
    constructionYear: 1905,
    location: {
      street: 'Bergmannstraße',
      houseNumber: '89',
      postalCode: '10961',
      city: 'Berlin',
      district: 'Kreuzberg',
      state: 'berlin',
      coordinates: {
        lat: 52.4929,
        lng: 13.3925,
      },
    },
    energyCertificate: {
      type: 'consumption',
      value: '110 kWh/(m²·a)',
      class: 'D',
      validUntil: '2032-09-30',
    },
    features: [
      'Altbau',
      'Stuck',
      'Hohe Decken',
      'Parkett',
      'Zentrale Lage',
      'Denkmalschutz',
    ],
    images: [
      {
        url: 'https://images.pexels.com/photos/1457847/pexels-photo-1457847.jpeg',
        alt: 'Altbauwohnung Wohnzimmer',
        caption: 'Wohnzimmer mit Stuck und Parkettboden',
      },
      {
        url: 'https://images.pexels.com/photos/1648771/pexels-photo-1648771.jpeg',
        alt: 'Schlafzimmer',
        caption: 'Gemütliches Schlafzimmer',
      },
      {
        url: 'https://images.pexels.com/photos/1599791/pexels-photo-1599791.jpeg',
        alt: 'Küche',
        caption: 'Funktionale Küche',
      },
      {
        url: 'https://images.pexels.com/photos/2121121/pexels-photo-2121121.jpeg',
        alt: 'Badezimmer',
        caption: 'Renoviertes Badezimmer',
      },
    ],
    createdAt: '2024-01-05T11:00:00Z',
    updatedAt: '2024-01-05T11:00:00Z',
  },
  {
    id: '5',
    title: 'Saniertes Stadthaus in Brandenburg an der Havel',
    slug: 'stadthaus-brandenburg-havel',
    status: 'available',
    featured: false,
    category: 'haus',
    description:
      'Liebevoll saniertes Stadthaus in historischer Lage von Brandenburg an der Havel. Das Haus erstreckt sich über drei Etagen und bietet viel Platz für eine große Familie. Im Erdgeschoss befindet sich ein großzügiger Wohn- und Essbereich mit angrenzender Küche. Im ersten und zweiten OG liegen insgesamt vier Schlafzimmer und zwei Badezimmer. Der kleine, aber feine Innenhof lädt zum Entspannen ein.',
    price: 395000,
    rooms: 6,
    livingArea: 180,
    plotSize: 85,
    bedrooms: 4,
    bathrooms: 2,
    floor: 'Erdgeschoss + 2 OG',
    constructionYear: 1880,
    location: {
      street: 'Hauptstraße',
      houseNumber: '34',
      postalCode: '14776',
      city: 'Brandenburg an der Havel',
      district: 'Altstadt',
      state: 'brandenburg',
      coordinates: {
        lat: 52.4125,
        lng: 12.5316,
      },
    },
    energyCertificate: {
      type: 'demand',
      value: '95 kWh/(m²·a)',
      class: 'C',
      validUntil: '2033-03-31',
    },
    features: [
      'Innenhof',
      'Keller',
      'Denkmalschutz',
      'Saniert',
      'Zentrale Lage',
      'Historisches Gebäude',
    ],
    images: [
      {
        url: 'https://images.pexels.com/photos/1370704/pexels-photo-1370704.jpeg',
        alt: 'Stadthaus Außenansicht',
        caption: 'Historisches Stadthaus in der Altstadt',
      },
      {
        url: 'https://images.pexels.com/photos/1643384/pexels-photo-1643384.jpeg',
        alt: 'Wohnbereich',
        caption: 'Großzügiger Wohnbereich',
      },
      {
        url: 'https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg',
        alt: 'Küche',
        caption: 'Moderne Küche',
      },
      {
        url: 'https://images.pexels.com/photos/1743229/pexels-photo-1743229.jpeg',
        alt: 'Innenhof',
        caption: 'Ruhiger Innenhof',
      },
    ],
    createdAt: '2024-01-12T15:00:00Z',
    updatedAt: '2024-01-12T15:00:00Z',
  },
  {
    id: '6',
    title: 'Moderne Neubauwohnung in Charlottenburg',
    slug: 'neubauwohnung-charlottenburg',
    status: 'available',
    featured: false,
    category: 'wohnung',
    description:
      'Erstbezug! Moderne 3-Zimmer-Wohnung in einem hochwertigen Neubau in Charlottenburg. Die Wohnung überzeugt durch ihre durchdachte Raumaufteilung und hochwertige Ausstattung. Zur Wohnung gehört ein Kellerabteil sowie ein TG-Stellplatz. Die Wohnanlage verfügt über eine gepflegte Gartenanlage zur gemeinschaftlichen Nutzung.',
    price: 595000,
    rooms: 3,
    livingArea: 92,
    bedrooms: 2,
    bathrooms: 1,
    floor: '1',
    constructionYear: 2024,
    location: {
      street: 'Kantstraße',
      houseNumber: '156',
      postalCode: '10623',
      city: 'Berlin',
      district: 'Charlottenburg',
      state: 'berlin',
      coordinates: {
        lat: 52.5065,
        lng: 13.3145,
      },
    },
    energyCertificate: {
      type: 'demand',
      value: '38 kWh/(m²·a)',
      class: 'A+',
      validUntil: '2036-01-31',
    },
    features: [
      'Neubau',
      'Erstbezug',
      'Tiefgarage',
      'Fahrstuhl',
      'Fußbodenheizung',
      'Smart Home',
      'Videogegensprechanlage',
      'Gemeinschaftsgarten',
    ],
    images: [
      {
        url: 'https://images.pexels.com/photos/2119714/pexels-photo-2119714.jpeg',
        alt: 'Modernes Wohnzimmer',
        caption: 'Lichtdurchfluteter Wohnbereich',
      },
      {
        url: 'https://images.pexels.com/photos/2251247/pexels-photo-2251247.jpeg',
        alt: 'Küche',
        caption: 'Hochwertige Einbauküche',
      },
      {
        url: 'https://images.pexels.com/photos/1579253/pexels-photo-1579253.jpeg',
        alt: 'Schlafzimmer',
        caption: 'Ruhiges Schlafzimmer',
      },
      {
        url: 'https://images.pexels.com/photos/2724749/pexels-photo-2724749.jpeg',
        alt: 'Badezimmer',
        caption: 'Modernes Badezimmer mit Fußbodenheizung',
      },
    ],
    createdAt: '2024-01-18T10:00:00Z',
    updatedAt: '2024-01-18T10:00:00Z',
  },
];

// Helper functions
export function getFeaturedProperties(): Property[] {
  return mockProperties.filter((p) => p.featured && p.status === 'available');
}

export function getAvailableProperties(): Property[] {
  return mockProperties.filter((p) => p.status === 'available');
}

export function getPropertyBySlug(slug: string): Property | undefined {
  return mockProperties.find((p) => p.slug === slug);
}

export function getPropertyById(id: string): Property | undefined {
  return mockProperties.find((p) => p.id === id);
}
