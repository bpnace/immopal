import { buildConfig } from 'payload'
import { postgresAdapter } from '@payloadcms/db-postgres'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import path from 'path'
import { fileURLToPath } from 'url'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  admin: {
    user: 'users',
    meta: {
      titleSuffix: '- immopal CMS',
      favicon: '/favicon.ico',
    },
  },
  collections: [
    // Benutzer / Users
    {
      slug: 'users',
      labels: {
        singular: 'Benutzer',
        plural: 'Benutzer',
      },
      auth: true,
      admin: {
        useAsTitle: 'email',
      },
      fields: [
        {
          name: 'name',
          type: 'text',
          label: 'Name',
          required: true,
        },
        {
          name: 'role',
          type: 'select',
          label: 'Rolle',
          required: true,
          defaultValue: 'admin',
          options: [
            {
              label: 'Admin',
              value: 'admin',
            },
            {
              label: 'Makler',
              value: 'makler',
            },
          ],
        },
      ],
    },

    // Immobilien / Properties
    {
      slug: 'properties',
      labels: {
        singular: 'Immobilie',
        plural: 'Immobilien',
      },
      admin: {
        useAsTitle: 'title',
        defaultColumns: ['title', 'status', 'price', 'updatedAt'],
      },
      fields: [
        {
          name: 'title',
          type: 'text',
          label: 'Titel',
          required: true,
        },
        {
          name: 'slug',
          type: 'text',
          label: 'URL-Slug',
          required: true,
          unique: true,
          admin: {
            description: 'URL-freundlicher Name (z.B. moderne-wohnung-berlin-mitte)',
          },
        },
        {
          name: 'status',
          type: 'select',
          label: 'Status',
          required: true,
          defaultValue: 'available',
          options: [
            {
              label: 'Verfügbar',
              value: 'available',
            },
            {
              label: 'Reserviert',
              value: 'reserved',
            },
            {
              label: 'Verkauft',
              value: 'sold',
            },
          ],
        },
        {
          name: 'featured',
          type: 'checkbox',
          label: 'Featured (Auf Startseite anzeigen)',
          defaultValue: false,
        },
        {
          name: 'category',
          type: 'select',
          label: 'Kategorie',
          required: true,
          options: [
            {
              label: 'Wohnung',
              value: 'wohnung',
            },
            {
              label: 'Haus',
              value: 'haus',
            },
            {
              label: 'Grundstück',
              value: 'grundstueck',
            },
            {
              label: 'Gewerbe',
              value: 'gewerbe',
            },
          ],
        },
        {
          name: 'description',
          type: 'richText',
          label: 'Beschreibung',
          required: true,
        },
        // Preisangaben
        {
          name: 'price',
          type: 'number',
          label: 'Preis (EUR)',
          required: true,
          min: 0,
        },
        // Objektdaten
        {
          name: 'rooms',
          type: 'number',
          label: 'Anzahl Zimmer',
          required: true,
          min: 0,
        },
        {
          name: 'livingArea',
          type: 'number',
          label: 'Wohnfläche (m²)',
          required: true,
          min: 0,
        },
        {
          name: 'plotSize',
          type: 'number',
          label: 'Grundstücksfläche (m²)',
          min: 0,
          admin: {
            description: 'Optional für Häuser und Grundstücke',
          },
        },
        {
          name: 'bedrooms',
          type: 'number',
          label: 'Schlafzimmer',
          min: 0,
        },
        {
          name: 'bathrooms',
          type: 'number',
          label: 'Badezimmer',
          min: 0,
        },
        {
          name: 'floor',
          type: 'text',
          label: 'Etage',
        },
        {
          name: 'constructionYear',
          type: 'number',
          label: 'Baujahr',
          min: 1800,
          max: new Date().getFullYear() + 5,
        },
        // Standort
        {
          name: 'location',
          type: 'group',
          label: 'Standort',
          fields: [
            {
              name: 'street',
              type: 'text',
              label: 'Straße',
              required: true,
            },
            {
              name: 'houseNumber',
              type: 'text',
              label: 'Hausnummer',
            },
            {
              name: 'postalCode',
              type: 'text',
              label: 'PLZ',
              required: true,
            },
            {
              name: 'city',
              type: 'text',
              label: 'Stadt',
              required: true,
            },
            {
              name: 'district',
              type: 'text',
              label: 'Bezirk/Stadtteil',
            },
            {
              name: 'state',
              type: 'select',
              label: 'Bundesland',
              required: true,
              defaultValue: 'berlin',
              options: [
                {
                  label: 'Berlin',
                  value: 'berlin',
                },
                {
                  label: 'Brandenburg',
                  value: 'brandenburg',
                },
              ],
            },
            {
              name: 'coordinates',
              type: 'group',
              label: 'Koordinaten',
              fields: [
                {
                  name: 'lat',
                  type: 'number',
                  label: 'Breitengrad',
                },
                {
                  name: 'lng',
                  type: 'number',
                  label: 'Längengrad',
                },
              ],
            },
          ],
        },
        // Energieausweis
        {
          name: 'energyCertificate',
          type: 'group',
          label: 'Energieausweis',
          fields: [
            {
              name: 'type',
              type: 'select',
              label: 'Art',
              options: [
                {
                  label: 'Bedarfsausweis',
                  value: 'demand',
                },
                {
                  label: 'Verbrauchsausweis',
                  value: 'consumption',
                },
              ],
            },
            {
              name: 'value',
              type: 'text',
              label: 'Energiekennwert',
            },
            {
              name: 'class',
              type: 'select',
              label: 'Effizienzklasse',
              options: [
                { label: 'A+', value: 'A+' },
                { label: 'A', value: 'A' },
                { label: 'B', value: 'B' },
                { label: 'C', value: 'C' },
                { label: 'D', value: 'D' },
                { label: 'E', value: 'E' },
                { label: 'F', value: 'F' },
                { label: 'G', value: 'G' },
                { label: 'H', value: 'H' },
              ],
            },
            {
              name: 'validUntil',
              type: 'date',
              label: 'Gültig bis',
            },
          ],
        },
        // Ausstattung
        {
          name: 'features',
          type: 'array',
          label: 'Ausstattungsmerkmale',
          fields: [
            {
              name: 'feature',
              type: 'text',
              label: 'Merkmal',
            },
          ],
        },
        // Bilder
        {
          name: 'images',
          type: 'array',
          label: 'Bilder',
          minRows: 1,
          maxRows: 20,
          required: true,
          fields: [
            {
              name: 'image',
              type: 'upload',
              relationTo: 'media',
              label: 'Bild',
              required: true,
            },
            {
              name: 'caption',
              type: 'text',
              label: 'Bildunterschrift',
            },
          ],
        },
        // SEO
        {
          name: 'seo',
          type: 'group',
          label: 'SEO',
          fields: [
            {
              name: 'metaTitle',
              type: 'text',
              label: 'Meta-Titel',
            },
            {
              name: 'metaDescription',
              type: 'textarea',
              label: 'Meta-Beschreibung',
            },
          ],
        },
      ],
    },

    // Blog-Beiträge / Blog Posts
    {
      slug: 'blog',
      labels: {
        singular: 'Blog-Beitrag',
        plural: 'Blog-Beiträge',
      },
      admin: {
        useAsTitle: 'title',
        defaultColumns: ['title', 'author', 'publishedAt', 'status'],
      },
      fields: [
        {
          name: 'title',
          type: 'text',
          label: 'Titel',
          required: true,
        },
        {
          name: 'slug',
          type: 'text',
          label: 'URL-Slug',
          required: true,
          unique: true,
        },
        {
          name: 'content',
          type: 'richText',
          label: 'Inhalt',
          required: true,
        },
        {
          name: 'excerpt',
          type: 'textarea',
          label: 'Kurzbeschreibung',
          admin: {
            description: 'Kurze Zusammenfassung für Vorschau',
          },
        },
        {
          name: 'featuredImage',
          type: 'upload',
          relationTo: 'media',
          label: 'Titelbild',
        },
        {
          name: 'author',
          type: 'relationship',
          relationTo: 'users',
          label: 'Autor',
          required: true,
        },
        {
          name: 'category',
          type: 'select',
          label: 'Kategorie',
          options: [
            {
              label: 'Ratgeber',
              value: 'ratgeber',
            },
            {
              label: 'Marktanalyse',
              value: 'marktanalyse',
            },
            {
              label: 'Kiez-Guide',
              value: 'kiez-guide',
            },
            {
              label: 'News',
              value: 'news',
            },
          ],
        },
        {
          name: 'tags',
          type: 'array',
          label: 'Tags',
          fields: [
            {
              name: 'tag',
              type: 'text',
              label: 'Tag',
            },
          ],
        },
        {
          name: 'status',
          type: 'select',
          label: 'Status',
          required: true,
          defaultValue: 'draft',
          options: [
            {
              label: 'Entwurf',
              value: 'draft',
            },
            {
              label: 'Veröffentlicht',
              value: 'published',
            },
          ],
        },
        {
          name: 'publishedAt',
          type: 'date',
          label: 'Veröffentlichungsdatum',
          admin: {
            date: {
              pickerAppearance: 'dayAndTime',
            },
          },
        },
        // SEO
        {
          name: 'seo',
          type: 'group',
          label: 'SEO',
          fields: [
            {
              name: 'metaTitle',
              type: 'text',
              label: 'Meta-Titel',
            },
            {
              name: 'metaDescription',
              type: 'textarea',
              label: 'Meta-Beschreibung',
            },
          ],
        },
      ],
    },

    // Medien / Media
    {
      slug: 'media',
      labels: {
        singular: 'Medium',
        plural: 'Medien',
      },
      upload: {
        staticDir: 'public/media',
        imageSizes: [
          {
            name: 'thumbnail',
            width: 400,
            height: 300,
            position: 'centre',
          },
          {
            name: 'card',
            width: 768,
            height: 576,
            position: 'centre',
          },
          {
            name: 'tablet',
            width: 1024,
            height: undefined,
            position: 'centre',
          },
          {
            name: 'desktop',
            width: 1920,
            height: undefined,
            position: 'centre',
          },
        ],
        adminThumbnail: 'thumbnail',
        mimeTypes: ['image/*', 'application/pdf'],
      },
      fields: [
        {
          name: 'alt',
          type: 'text',
          label: 'Alt-Text',
          required: true,
        },
        {
          name: 'caption',
          type: 'text',
          label: 'Bildunterschrift',
        },
      ],
    },
  ],
  editor: lexicalEditor({}),
  secret: process.env.PAYLOAD_SECRET || '',
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  db: postgresAdapter({
    pool: {
      connectionString: process.env.DATABASE_URI || '',
    },
  }),
  sharp,
})
