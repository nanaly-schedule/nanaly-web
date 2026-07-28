import { cn } from "@repo/ui/lib/utils";
import { CONTAINER } from "@/lib/ui";
import { Button } from "@repo/ui/components/button";
import Reveal from "@/app/_components/Reveal";

export default function Hero() {
    return (
        <section id="hero" className="bg-gradient-to-b from-white from-[30%] to-[#eaf2fe]">
            <div className={cn(CONTAINER, "py-20 text-center lg:py-[120px]")}>
                <Reveal as="span"
                        className="inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-3.5 py-1.5 text-[13px] font-semibold tracking-[-0.02em] text-primary lg:text-sm">
                    2주 후 정식 출시 · 사전예약 오픈
                </Reveal>
                <Reveal as="h1" delay={80}
                        className="mt-6 text-[28px] font-bold leading-[1.35] tracking-[-0.02em] text-foreground sm:text-[44px] lg:mt-8 lg:text-[64px]">
                    매장 스케줄,
                    <br />
                    <span className="text-primary">한 곳에서 정확하게</span>
                </Reveal>
                <Reveal as="p" delay={160}
                        className="mx-auto mt-6 max-w-[720px] text-[15px] font-medium leading-[1.55] tracking-[-0.02em] text-muted-foreground sm:text-[19px] lg:mt-8 lg:text-[22px]">
                    관리자와 근무자가 같은 화면에서 근무 일정을 확인하고 공유해요.
                    <br className="hidden sm:block" />
                    카톡과 엑셀로 흩어진 스케줄을 하나로 정리해요.
                </Reveal>
                <Reveal delay={240}
                        className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row lg:mt-14">
                    <Button asChild size="lg" className="h-12 px-8 text-base font-semibold shadow-card">
                        <a href="#cta">사전예약 신청하기</a>
                    </Button>
                    <Button asChild variant="outline" size="lg" className="h-12 px-8 text-base font-semibold">
                        <a href="#features">기능 살펴보기</a>
                    </Button>
                </Reveal>
                <Reveal delay={320} className="mt-4 text-[13px] text-muted-foreground">
                    출시 소식을 가장 먼저 알려드려요.
                </Reveal>
            </div>
        </section>
    );
}
