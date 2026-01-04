import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export async function GET() {
  try {
    return new ImageResponse(
      (
        <div
          style={{
            height: '100%',
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#0f172a',
            backgroundImage: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)',
          }}
        >
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '80px',
              textAlign: 'center',
            }}
          >
            <h1
              style={{
                fontSize: '72px',
                fontWeight: 'bold',
                color: 'white',
                marginBottom: '24px',
                lineHeight: 1.2,
              }}
            >
              immo-pal
            </h1>
            <p
              style={{
                fontSize: '40px',
                color: '#94a3b8',
                marginBottom: '16px',
                lineHeight: 1.4,
              }}
            >
              Ihr vertrauensvoller Partner für
            </p>
            <p
              style={{
                fontSize: '48px',
                fontWeight: 'bold',
                color: '#3b82f6',
                marginBottom: '32px',
                lineHeight: 1.3,
              }}
            >
              Immobilien in Deutschland
            </p>
            <p
              style={{
                fontSize: '32px',
                color: '#cbd5e1',
                lineHeight: 1.4,
              }}
            >
              Kostenlose Beratung & Bewertung
            </p>
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 630,
      },
    );
  } catch (e: unknown) {
    console.error(e);
    return new Response('Failed to generate OG image', { status: 500 });
  }
}
