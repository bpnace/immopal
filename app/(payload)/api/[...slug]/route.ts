// Demo-safe API endpoints (no DB, returns dummy data). Replace with real Payload/Strapi handlers later.
import { NextResponse, type NextRequest } from 'next/server'

function getSlugParts(req: NextRequest) {
  return req.nextUrl.pathname.split('/api/').pop()?.split('/').filter(Boolean) || []
}

export async function GET(req: NextRequest) {
  const slug = getSlugParts(req)
  return NextResponse.json({ message: 'Demo GET (no DB)', slug })
}

export async function POST(req: NextRequest) {
  const slug = getSlugParts(req)
  const body = await req.json().catch(() => ({}))
  return NextResponse.json({ message: 'Demo POST (no DB)', slug, body })
}

export async function DELETE(req: NextRequest) {
  const slug = getSlugParts(req)
  return NextResponse.json({ message: 'Demo DELETE (no DB)', slug })
}

export async function PATCH(req: NextRequest) {
  const slug = getSlugParts(req)
  const body = await req.json().catch(() => ({}))
  return NextResponse.json({ message: 'Demo PATCH (no DB)', slug, body })
}
