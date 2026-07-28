import type { Metadata } from "next";
import { SITE_URL } from "@/lib/site";
import "pretendard/dist/web/variable/pretendardvariable-dynamic-subset.css";
import "@repo/ui/globals.css";

const TITLE = "나날이 — 매장 근무 스케줄을 한 곳에서";
const DESCRIPTION =
    "관리자와 근무자가 같은 화면에서 근무 일정을 확인하고 공유해요. 카톡·엑셀로 흩어진 매장 스케줄을 하나로 정리하는 나날이. 지금 사전예약하세요.";

export const metadata: Metadata = {
    metadataBase: new URL(SITE_URL),
    title: {
        default: TITLE,
        template: "%s | 나날이",
    },
    description: DESCRIPTION,
    applicationName: "나날이",
    keywords: [
        "나날이",
        "매장 스케줄",
        "근무 스케줄",
        "근무표",
        "매장 관리",
        "근무 일정 공유",
        "알바 스케줄",
    ],
    alternates: { canonical: SITE_URL },
    robots: { index: true, follow: true },
    verification: {
        other: {
            "naver-site-verification": "f18160c292a62f675ec53db208339e808a78f648",
        },
    },
    openGraph: {
        type: "website",
        locale: "ko_KR",
        url: SITE_URL,
        siteName: "나날이",
        title: TITLE,
        description: DESCRIPTION,
        // images: [{ url: "/og.png", width: 1200, height: 630, alt: "나날이" }], // OG 이미지 준비되면 주석 해제
    },
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang="ko" className="scroll-smooth">
        <body>{children}</body>
        </html>
    );
}
