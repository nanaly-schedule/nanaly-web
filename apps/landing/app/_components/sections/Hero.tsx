import { cn } from "@repo/ui/lib/utils";
import Image from "next/image";
import { CONTAINER } from "@/lib/ui";
import { Button } from "@repo/ui/components/button";
import Reveal from "@/app/_components/Reveal";

export default function Hero() {
    return (
        <section id="hero" className="overflow-hidden bg-gradient-to-b from-white from-[35%] to-[#eaf2fe]">
            <div className={cn(CONTAINER, "py-16 lg:py-24")}>
                <div className="flex flex-col items-center gap-12 text-center lg:flex-row lg:gap-10 lg:text-left">
                    {/* 텍스트 (좌) */}
                    <div className="flex flex-1 flex-col items-center lg:items-start">
                        <Reveal as="h1"
                                className="text-[30px] font-extrabold leading-[1.2] tracking-[-0.03em] text-foreground sm:text-[44px] lg:text-[60px]">
                            매장 스케줄
                            <br />
                            <span className="whitespace-nowrap text-primary">한 곳에서 정확하게</span>
                        </Reveal>
                        <Reveal as="p" delay={120}
                                className="mt-6 max-w-[460px] text-base font-medium leading-[1.55] tracking-[-0.02em] text-muted-foreground sm:text-[18px] lg:mt-7">
                            관리자와 근무자가 같은 화면에서
                            <br />
                            근무 일정을 확인하고 공유해요.
                        </Reveal>
                        <Reveal delay={220} className="mt-8 flex flex-col gap-3 sm:flex-row lg:mt-10">
                            <Button asChild size="lg" className="h-12 px-8 text-base font-semibold shadow-card">
                                <a href="#cta">사전예약 신청하기</a>
                            </Button>
                            <Button asChild variant="outline" size="lg" className="h-12 px-8 text-base font-semibold">
                                <a href="#features">기능 살펴보기</a>
                            </Button>
                        </Reveal>
                    </div>

                    {/* 목업 (우) — 투명 PNG, 각도·겹침 baked (효과 없음) */}
                    <Reveal dir="right" delay={200} className="w-full lg:w-auto lg:shrink-0">
                        <Image
                            src="/hero/mockup.png"
                            alt="나날이 관리자 대시보드와 근무 스케줄 화면"
                            width={1920}
                            height={1440}
                            priority
                            sizes="(max-width: 1024px) 100vw, 50vw"
                            className="mx-auto w-full max-w-[600px] lg:w-[50vw] lg:max-w-[880px]"
                        />
                    </Reveal>
                </div>
            </div>
        </section>
    );
}
