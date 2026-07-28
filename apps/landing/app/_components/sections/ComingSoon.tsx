import Image from "next/image";
import { cn } from "@repo/ui/lib/utils";
import { CONTAINER } from "@/lib/ui";
import Reveal from "@/app/_components/Reveal";

const FEATURES = [
    { illo: { src: "/illustrations/building.svg", w: 1010, h: 771 },
        title: "대형 매장 지원", desc: ["여러 매장도 한 계정에서", "함께 관리해요"] },
    { illo: { src: "/illustrations/artificial-intelligence.svg", w: 458, h: 720 },
        title: "AI 스케줄 추천", desc: ["복잡한 근무 편성도", "AI가 알아서 추천해요"] },
];

export default function ComingSoon() {
    return (
        <section className="bg-[#1f2933]">
            <div className={cn(CONTAINER, "flex flex-col gap-12 py-20 lg:gap-16 lg:py-[120px]")}>
                <Reveal className="flex flex-col gap-6 text-center lg:gap-10">
                    <h2 className="text-[28px] font-extrabold leading-[1.25] tracking-[-0.03em] text-white/90 sm:text-[40px] lg:text-[52px]">
                        매장 운영이
                        <br />
                        지금보다 더 쉬워지도록
                    </h2>
                    <p className="text-[17px] font-medium leading-[1.5] tracking-[-0.02em] text-white/55 sm:text-[22px] lg:text-[30px]">
                        더 편리한 기능을 곧 선보일 예정이에요
                    </p>
                </Reveal>

                <div className="flex flex-col items-stretch justify-center gap-6 sm:flex-row lg:gap-10">
                    {FEATURES.map(({ illo, title, desc }, i) => (
                        <Reveal key={title} dir="scale" delay={i * 120} className="flex-1 sm:max-w-[380px]">
                            <div className="group flex h-full flex-col items-center justify-center gap-6 rounded-2xl bg-white px-10 py-10 shadow-overlay transition-transform duration-300 hover:-translate-y-1.5 lg:px-14">
                                <div className="flex h-28 items-center justify-center lg:h-32">
                                    <Image src={illo.src} alt="" width={illo.w} height={illo.h}
                                           className="h-full w-auto max-w-full object-contain transition-transform duration-300 group-hover:scale-105" />
                                </div>
                                <div className="flex flex-col items-center gap-2.5 text-center">
                                    <h3 className="text-[20px] font-bold tracking-[-0.02em] text-foreground lg:text-[24px]">
                                        {title}
                                    </h3>
                                    <p className="text-[16px] font-medium leading-[1.4] text-muted-foreground lg:text-[19px]">
                                        {desc[0]}
                                        <br />
                                        {desc[1]}
                                    </p>
                                </div>
                            </div>
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    );
}
