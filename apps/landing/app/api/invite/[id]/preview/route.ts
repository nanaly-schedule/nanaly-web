import { NextResponse } from 'next/server';

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  const { id } = await params;
  const baseUrl = process.env.INVITE_API_BASE_URL?.replace(/\/$/, '');

  if (!baseUrl) {
    return NextResponse.json(
      {
        statusCode: 503,
        errorCode: 'API_NOT_CONFIGURED',
        message: '초대 정보를 확인할 수 없습니다',
        timestamp: new Date().toISOString(),
      },
      { status: 503 },
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

    return NextResponse.json(
      payload ?? {
        statusCode: response.status,
        errorCode: 'VALIDATION_FAILED',
        message: '유효하지 않은 초대코드입니다',
        timestamp: new Date().toISOString(),
      },
      {
        status: response.status,
      },
    );
  } catch {
    return NextResponse.json(
      {
        statusCode: 502,
        errorCode: 'API_UNAVAILABLE',
        message: '초대 정보를 확인할 수 없습니다',
        timestamp: new Date().toISOString(),
      },
      { status: 502 },
    );
  }
}
