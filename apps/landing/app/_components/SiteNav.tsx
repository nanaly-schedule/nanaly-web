import { Button } from "@repo/ui/components/button";

const LINKS = [
    { label: "기능", href: "#features" },
    { label: "소개", href: "#intro" },
];

export default function SiteNav() {
    return (
        <header className="sticky top-0 z-50 border-b border-border/60 bg-white/90 backdrop-blur-md">
            <div className="mx-auto flex h-16 max-w-[1200px] items-center justify-between px-5 sm:px-8 lg:h-[72px] lg:px-6">
                <a href="#top" className="text-xl font-bold tracking-[-0.02em] text-foreground">나날이</a>
                <div className="flex items-center gap-6 lg:gap-10">
                    <nav className="hidden sm:block">
                        <ul className="flex items-center gap-8 text-[15px] font-semibold tracking-[-0.02em] text-muted-foreground lg:text-base">
                            {LINKS.map((l) => (
                                <li key={l.href}>
                                    <a href={l.href} className="relative py-1 transition-colors after:absolute after:inset-x-0 after:-bottom-0.5 after:h-0.5 after:origin-left after:scale-x-0 after:rounded-full after:bg-primary after:transition-transform
  after:duration-300 hover:text-foreground hover:after:scale-x-100">
                                        {l.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </nav>
                    <Button asChild size="sm" className="font-semibold">
                        <a href="#cta">사전예약</a>
                    </Button>
                </div>
            </div>
        </header>
    );
}
