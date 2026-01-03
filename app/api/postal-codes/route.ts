import { NextResponse } from 'next/server';

import {
  fetchPostalCodeSuggestions,
  POSTAL_CODE_MIN_QUERY_LENGTH,
} from '@/lib/postal-codes';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const query = (searchParams.get('q') || '').trim();
  const limitParam = searchParams.get('limit');
  const limit = limitParam ? Math.min(Math.max(Number(limitParam), 1), 20) : 10;

  if (query.length < POSTAL_CODE_MIN_QUERY_LENGTH) {
    return NextResponse.json({ suggestions: [] });
  }

  try {
    const suggestions = await fetchPostalCodeSuggestions(query, limit);
    return NextResponse.json({ suggestions });
  } catch (error) {
    console.error('Postal code lookup failed:', error);
    return NextResponse.json({ suggestions: [], error: 'lookup_failed' }, { status: 500 });
  }
}
