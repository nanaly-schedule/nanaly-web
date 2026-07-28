import { Button } from "@repo/ui/components/button";

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-center gap-4 bg-muted">
            <h1 className="text-4xl font-bold text-foreground">나날이</h1>
            <p className="text-muted-foreground">가게 스케줄 공유앱</p>
            <Button>사전예약 신청</Button>
        </main>
    );
}
