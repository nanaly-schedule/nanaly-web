import Image from "next/image";
import { cn } from "@repo/ui/lib/utils";
import { CONTAINER } from "@/lib/ui";
import Reveal from "@/app/_components/Reveal";

const ROLES = [
    { illo: { src: "/illustrations/admin.svg", w: 960, h: 635 }, role: "관리자",
        title: "매장을 만들고 전체를 관리해요",
        desc: "매장을 등록하고 근무자를 초대해요. 스케줄을 편성하고 매장 정보를 관리해요." },
    { illo: { src: "/illustrations/manager.svg", w: 715, h: 604 }, role: "매니저",
        title: "스케줄 편성을 함께 맡아요",
        desc: "관리자를 도와 근무를 편성·조정하고, 공지를 등록해 팀에 빠르게 공유해요." },
    { illo: { src: "/illustrations/staff.svg", w: 801, h: 779 }, role: "스태프",
        title: "내 근무만 확인하면 끝",
        desc: "오늘 근무와 공지를 한눈에 확인하고, 변경이 필요하면 바로 요청해요." },
];

export default function Roles() {
    return (
        <section id="roles" className="bg-white">
            <div className={cn(CONTAINER, "py-20 lg:py-[120px]")}>
                <Reveal className="text-center">
                    <h2 className="text-[28px] font-bold leading-[1.4] tracking-[-0.02em] text-foreground sm:text-[40px] lg:text-[52px]">
                        매장의 모든 역할을
                        <br />
                        한 앱에서
                    </h2>
                </Reveal>

                <div className="mt-14 grid gap-5 sm:grid-cols-3 lg:mt-20 lg:gap-6">
                    {ROLES.map(({ illo, role, title, desc }, i) => (
                        <Reveal key={role} delay={i * 120}
                                className="flex flex-col gap-5 rounded-2xl bg-muted p-7 lg:p-8">
                            <div className="flex h-28 items-center justify-center lg:h-32">
                                <Image src={illo.src} alt="" width={illo.w} height={illo.h}
                                       className="h-full w-auto max-w-full object-contain" />
                            </div>
                            <div>
                                <p className="text-sm font-bold text-primary">{role}</p>
                                <h3 className="mt-1.5 text-xl font-bold leading-[1.4] tracking-[-0.02em] text-foreground lg:text-[22px]">
                                    {title}
                                </h3>
                            </div>
                            <p className="text-[15px] font-medium leading-[1.55] text-muted-foreground lg:text-base">
                                {desc}
                            </p>
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    );
}
