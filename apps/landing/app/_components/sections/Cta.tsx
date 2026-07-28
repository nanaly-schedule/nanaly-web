import { cn } from "@repo/ui/lib/utils";
import { CONTAINER } from "@/lib/ui";
import Reveal from "@/app/_components/Reveal";
import LeadForm from "@/app/_components/LeadForm";

export default function Cta() {
    return (
        <section id="cta" className="bg-gradient-to-b from-[#eaf2fe] to-white">
            <div className={cn(CONTAINER, "flex flex-col items-center gap-10 py-20 text-center lg:gap-14 lg:py-[120px]")}>
                <Reveal className="flex flex-col items-center gap-4 lg:gap-6">
                    <h2 className="text-[28px] font-bold leading-[1.4] tracking-[-0.02em] text-foreground sm:text-[40px] lg:text-[48px]">
                        지금 사전예약하고
                        <br />
                        가장 먼저 만나보세요
                    </h2>
                    <p className="max-w-md text-[15px] font-medium leading-[1.55] text-muted-foreground sm:text-lg">
                        매장 정보를 남겨 주시면 출시 소식과 함께 안내해 드려요.
                    </p>
                </Reveal>
                <Reveal delay={120} className="flex w-full justify-center">
                    <LeadForm />
                </Reveal>
            </div>
        </section>
    );
}
