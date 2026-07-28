import type { Metadata } from "next";
import "pretendard/dist/web/variable/pretendardvariable-dynamic-subset.css";
import "@repo/ui/globals.css";

export const metadata: Metadata = {
    title: "나날이 (Nanaly)",
    description: "가게 스케줄 공유앱",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang="ko">
        <body>{children}</body>
        </html>
    );
}
