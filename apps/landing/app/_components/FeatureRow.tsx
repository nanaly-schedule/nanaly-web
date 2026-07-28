import type { ReactNode } from "react";
import Image from "next/image";
import { cn } from "@repo/ui/lib/utils";
import Reveal from "@/app/_components/Reveal";

export type Screen = { src: string; alt: string; w: number; h: number };

export default function FeatureRow({
                                       title, desc, screen, media, reverse = false,
                                   }: {
    title: ReactNode;
    desc: ReactNode;
    screen?: Screen;
    media?: ReactNode;
    reverse?: boolean;
}) {
    return (
        <div className="flex flex-col gap-10 lg:flex-row lg:items-center lg:gap-12">
            <Reveal dir={reverse ? "right" : "left"}
                    className={cn("flex flex-1 flex-col items-start gap-6 lg:gap-10", reverse && "lg:order-2")}>
                    <h3 className="text-[26px] font-bold leading-[1.35] tracking-[-0.02em] text-foreground sm:text-[34px] lg:text-[44px]">
                        {title}
                    </h3>
                    <p className="text-[16px] font-medium leading-[1.55] tracking-[-0.01em] text-muted-foreground sm:text-[18px] lg:text-[20px]">
                        {desc}
                    </p>
            </Reveal>

            <Reveal dir={reverse ? "left" : "right"} delay={120}
                    className={cn("w-full lg:w-[480px] lg:shrink-0", reverse && "lg:order-1")}>
                {media ? (
                    media
                ) : screen ? (
                    <Image src={screen.src} alt={screen.alt} width={screen.w} height={screen.h}
                           sizes="(max-width: 1024px) 85vw, 460px"
                           className="mx-auto h-auto w-full max-w-[300px] transition-transform duration-500 hover:-translate-y-2 lg:max-w-[360px]" />
                ) : (
                    <div className="mx-auto flex aspect-[9/19] w-full max-w-[300px] items-center justify-center rounded-[2rem] border border-border bg-muted">
                        <span className="text-sm font-medium text-muted-foreground">화면 준비 중</span>
                    </div>
                )}
            </Reveal>
        </div>
    );
}
