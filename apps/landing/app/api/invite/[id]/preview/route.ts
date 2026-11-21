import { NextResponse } from 'next/server';

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  const { id } = await params;

  const baseUrl = process.env.INVITE_API_BASE_URL?.replace(/\/$/, '');

  if (!baseUrl) {
    if (id === '1') {
      return NextResponse.json(
        { valid: false, reason: 'EXPIRED' },
        { status: 410 },
      );
    }

    if (id === '2') {
      return NextResponse.json({
        valid: true,
        storeId: 'mock-store-2',
        storeName: '테스트 매장',
      });
    }

    if (id === '3') {
      return NextResponse.json({
        valid: true,
        storeId: 'mock-store-3',
        storeName: '테스트 매장',
        openApp: true,
      });
    }

    return NextResponse.json(
      { valid: false, reason: 'NOT_FOUND' },
      { status: 404 },
    );
  }

  try {
    const response = await fetch(
      `${baseUrl}/invite/${encodeURIComponent(id)}/preview`,
      {
        method: 'GET',
        headers: { Accept: 'application/json' },
        cache: 'no-store',
      },
    );

    const payload = await response.json().catch(() => null);

    return NextResponse.json(payload ?? { valid: false }, {
      status: response.status,
    });
  } catch {
    return NextResponse.json(
      { valid: false, reason: 'API_UNAVAILABLE' },
      { status: 502 },
    );
  }
}
