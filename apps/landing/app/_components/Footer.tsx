export function Footer() {
    return (
        <footer className="border-t border-border bg-background">
            <div className="mx-auto w-full max-w-6xl px-5 py-12 sm:px-6">
                <div className="flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
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
                <p className="mt-8 text-xs text-muted-foreground">© 2026 나날이</p>
            </div>
        </footer>
    );
}
