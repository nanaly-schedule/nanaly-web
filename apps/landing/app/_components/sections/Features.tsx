import DashboardMedia from "@/app/_components/DashboardMedia";
import { cn } from "@repo/ui/lib/utils";
import { CONTAINER } from "@/lib/ui";
import Reveal from "@/app/_components/Reveal";
import FeatureRow from "@/app/_components/FeatureRow";

export default function Features() {
    return (
        <section id="features" className="bg-white">
            <div className={cn(CONTAINER, "pt-20 lg:pt-[120px]")}>
                <Reveal className="text-center">
                    <h2 className="text-[28px] font-bold leading-[1.4] tracking-[-0.02em] text-foreground sm:text-[40px] lg:text-[52px]">
                        매장 운영에 필요한 것,
                        <br />
                        나날이 하나로
                    </h2>
                </Reveal>
            </div>

            <div className={cn(CONTAINER, "space-y-24 pt-16 pb-20 lg:space-y-[120px] lg:pt-24 lg:pb-[120px]")}>
                <FeatureRow title={<>매장 정보와 공지를<br />한 곳에서</>}
                            desc={<>매장 현황과 공지를 한 화면에서 확인해요.<br className="hidden sm:block" />여기저기 흩어보지 않아도 돼요.</>}
                            media={<DashboardMedia />}
                />
                <FeatureRow reverse
                            title={<>링크 하나로<br />매장 참여를 간편하게</>}
                            desc={<>초대 링크만 열면 바로 매장에 참여해요.<br className="hidden sm:block" />복잡한 절차가 없어요.</>}
                            screen={{ src: "/screens/join.png", alt: "매장 참여 화면", w: 1287, h: 2339 }}
                />
                <FeatureRow title={<>간단한 인증으로<br />매장 등록을 한 번에</>}
                            desc={<>간단한 인증만 거치면<br className="hidden sm:block" />매장을 바로 등록하고 운영을 시작해요.</>}
                            screen={{ src: "/screens/register.png", alt: "매장 등록 화면", w: 1414, h: 2600 }}
                />
                <FeatureRow reverse title={<>한눈에 보는<br />직원 근무 스케줄</>}
                            desc={<>누가 언제 일하는지 한눈에.<br className="hidden sm:block" />근무 일정을 명확하게 공유해요.</>}
                            screen={{ src: "/screens/schedule.png", alt: "근무 스케줄 화면", w: 1359, h: 2600 }}
                />
            </div>
        </section>
    );
}
