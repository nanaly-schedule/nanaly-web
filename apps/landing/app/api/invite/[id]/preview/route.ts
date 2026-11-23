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
        {
          statusCode: 400,
          errorCode: 'VALIDATION_FAILED',
          message: '만료된 초대코드입니다',
          timestamp: '2026-11-21T00:00:00.000Z',
        },
        { status: 400 },
      );
    }

    if (id === '2') {
      return NextResponse.json({ storeName: '나날이 매장' }, { status: 200 });
    }

    if (id === '3') {
      return NextResponse.json(
        { storeName: '나날이 매장', openApp: true },
        { status: 200 },
      );
    }

    return NextResponse.json(
      {
        statusCode: 400,
        errorCode: 'VALIDATION_FAILED',
        message: '유효하지 않은 초대코드입니다',
        timestamp: '2026-11-21T00:00:00.000Z',
      },
      { status: 400 },
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
