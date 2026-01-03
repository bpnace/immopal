export type PropertyStatus = 'available' | 'reserved' | 'sold';

export type PropertyCategory = 'wohnung' | 'haus' | 'grundstueck' | 'gewerbe';

export type PropertyState = 'berlin' | 'brandenburg';

export interface Property {
  id: string;
  title: string;
  slug: string;
  status: PropertyStatus;
  featured: boolean;
  category: PropertyCategory;
  description: string;
  price: number;
  rooms: number;
  livingArea: number;
  plotSize?: number;
  bedrooms?: number;
  bathrooms?: number;
  floor?: string;
  constructionYear?: number;
  location: {
    street: string;
    houseNumber?: string;
    postalCode: string;
    city: string;
    district?: string;
    state: PropertyState;
    coordinates?: {
      lat: number;
      lng: number;
    };
  };
  energyCertificate?: {
    type: 'demand' | 'consumption';
    value: string;
    class: 'A+' | 'A' | 'B' | 'C' | 'D' | 'E' | 'F' | 'G' | 'H';
    validUntil: string;
  };
  features: string[];
  images: {
    url: string;
    alt: string;
    caption?: string;
  }[];
  seo?: {
    metaTitle?: string;
    metaDescription?: string;
  };
  createdAt: string;
  updatedAt: string;
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  content: string;
  excerpt: string;
  featuredImage?: string;
  author: {
    name: string;
  };
  category: 'ratgeber' | 'marktanalyse' | 'kiez-guide' | 'news';
  tags: string[];
  status: 'draft' | 'published';
  publishedAt?: string;
  createdAt: string;
  updatedAt: string;
}
