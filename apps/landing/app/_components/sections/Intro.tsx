import { cn } from "@repo/ui/lib/utils";
import { CONTAINER } from "@/lib/ui";
import Reveal from "@/app/_components/Reveal";

export default function Intro() {
    return (
        <section id="intro" className="bg-muted">
            <div className={cn(CONTAINER, "py-24 text-center lg:py-[140px]")}>
                <Reveal as="p"
                        className="text-[18px] font-semibold leading-[1.4] tracking-[-0.02em] text-muted-foreground sm:text-[24px] lg:text-[28px]">
                    근무 일정을 카톡·엑셀로 주고받느라 번거로우셨나요?
                </Reveal>
                <Reveal as="h2" delay={100}
                        className="mt-7 text-[26px] font-extrabold leading-[1.25] tracking-[-0.03em] text-foreground sm:text-[36px] lg:mt-10 lg:text-[44px]">
                    이제 나날이에서 매장 스케줄을
                    <br />
                    <span className="text-primary">빠짐없이, 한눈에</span> 관리해요
                </Reveal>
            </div>
        </section>
    );
}
