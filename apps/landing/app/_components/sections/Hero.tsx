import { cn } from "@repo/ui/lib/utils";
import { CONTAINER } from "@/lib/ui";
import { Button } from "@repo/ui/components/button";
import Reveal from "@/app/_components/Reveal";

export default function Hero() {
    return (
        <section id="hero" className="bg-gradient-to-b from-white from-[30%] to-[#eaf2fe]">
            <div className={cn(CONTAINER, "py-20 text-center lg:py-[120px]")}>
                <Reveal as="h1"
                        className="text-[28px] font-extrabold leading-[1.2] tracking-[-0.03em] text-foreground sm:text-[44px] lg:text-[64px]">
                    매장 스케줄
                    <br />
                    <span className="text-primary">한 곳에서 정확하게</span>
                </Reveal>
                <Reveal as="p" delay={120}
                        className="mx-auto mt-6 max-w-[540px] text-[15px] font-medium leading-[1.55] tracking-[-0.02em] text-muted-foreground sm:text-[19px] lg:mt-8 lg:text-[22px]">
                    관리자와 근무자가 같은 화면에서
                    <br />
                    근무 일정을 확인하고 공유해요.
                </Reveal>
                <Reveal delay={220}
                        className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row lg:mt-14">
                    <Button asChild size="lg" className="h-12 px-8 text-base font-semibold shadow-card">
                        <a href="#cta">사전예약 신청하기</a>
                    </Button>
                    <Button asChild variant="outline" size="lg" className="h-12 px-8 text-base font-semibold">
                        <a href="#features">기능 살펴보기</a>
                    </Button>
                </Reveal>
            </div>
        </section>
    );
}
