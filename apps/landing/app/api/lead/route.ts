import { NextResponse } from "next/server";

export async function POST(req: Request) {
    const webhook = process.env.DISCORD_WEBHOOK_URL;
    if (!webhook) {
        return NextResponse.json({ ok: false, error: "설정 오류" }, { status: 500 });
    }

    let body: Record<string, string>;
    try {
        body = await req.json();
    } catch {
        return NextResponse.json({ ok: false }, { status: 400 });
    }

    const { store, manager, contact, website } = body;

    // 허니팟: 봇이 채우면 조용히 성공 처리하고 무시
    if (website) return NextResponse.json({ ok: true });

    if (!store?.trim() || !manager?.trim() || !contact?.trim()) {
        return NextResponse.json({ ok: false, error: "필수 항목을 입력해 주세요." }, { status: 400 });
    }

    const res = await fetch(webhook, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            username: "나날이 사전예약",
            allowed_mentions: { parse: [] },
            embeds: [
                {
                    color: 0x3b82f6,
                    author: { name: "새 사전예약 신청" },
                    title: `🏬  ${store.slice(0, 100)}`,
                    fields: [
                        { name: "담당자", value: `\`\`\`${manager.slice(0, 50)}\`\`\``, inline: true },
                        { name: "연락처", value: `\`\`\`${contact.slice(0, 100)}\`\`\``, inline: true },
                    ],
                    footer: { text: "나날이 · 사전예약" },
                    timestamp: new Date().toISOString(),
                },
            ],
        }),
    });

    if (!res.ok) {
        return NextResponse.json({ ok: false, error: "전송 실패" }, { status: 502 });
    }
    return NextResponse.json({ ok: true });
}
