import { Button } from "@repo/ui/components/button";

const navLinks = [
    { href: "#features", label: "기능" },
    { href: "#intro", label: "소개" },
];

export function SiteNav() {
    return (
        <header className="sticky top-0 z-50 border-b border-border/70 bg-background/80 backdrop-blur">
            <div className="mx-auto flex h-14 w-full max-w-6xl items-center justify-between px-5 sm:px-6">
                <a href="#top" className="text-lg font-bold tracking-tight text-foreground">
                    나날이
                </a>
                <nav className="hidden items-center gap-8 sm:flex">
                    {navLinks.map((l) => (
                        <a
                            key={l.href}
                            href={l.href}
                            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
                        >
                            {l.label}
                        </a>
                    ))}
                </nav>
                <Button asChild size="sm">
                    <a href="#cta">사전예약</a>
                </Button>
            </div>
        </header>
    );
}
