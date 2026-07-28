import { cn } from "@repo/ui/lib/utils";
import { CONTAINER } from "@/lib/ui";

export default function Footer() {
    return (
        <footer className="border-t border-border bg-white">
            <div className={cn(CONTAINER, "flex flex-col gap-8 py-12 sm:flex-row sm:items-start sm:justify-between")}>
                <div>
                    <p className="text-lg font-bold text-foreground">나날이</p>
                    <p className="mt-2 text-sm text-muted-foreground">매장 스케줄을 한 곳에서.</p>
                </div>
                <div className="text-sm text-muted-foreground">
                    <p>상호 · 사업자등록번호 · 대표자</p>
                    <p className="mt-1">주소</p>
                    <p className="mt-1">문의 · hello@nanaly-schedule.com</p>
                </div>
            </div>
            <div className={cn(CONTAINER, "pb-10")}>
                <p className="text-xs text-muted-foreground">© 2026 나날이</p>
            </div>
        </footer>
    );
}
