import { cn } from "@repo/ui/lib/utils";

const TONE: Record<string, string> = {
    blue: "bg-[#3b82f6] text-white",
    green: "bg-[#2faa5a] text-white",
    purple: "bg-[#8b5cf6] text-white",
    orange: "bg-[#f5931f] text-white",
    sky: "bg-[#dbeafe] text-[#2563eb]",
};

const WEEK: { day: string; date: number; today?: boolean; shifts: [string, keyof typeof TONE][] }[] = [
    { day: "일", date: 10, shifts: [] },
    { day: "월", date: 11, shifts: [["지민", "blue"], ["현우", "green"]] },
    { day: "화", date: 12, shifts: [["수아", "orange"]] },
    { day: "수", date: 13, today: true, shifts: [["지민", "blue"], ["민재", "purple"], ["현우", "green"]] },
    { day: "목", date: 14, shifts: [["수아", "orange"], ["지민", "blue"]] },
    { day: "금", date: 15, shifts: [["현우", "green"], ["민재", "purple"]] },
    { day: "토", date: 16, shifts: [["도윤", "sky"]] },
];

export default function HeroSchedule() {
    return (
        <div className="rounded-2xl bg-white p-4 shadow-card sm:p-5">
            <div className="mb-3 flex items-center justify-between">
                <p className="text-sm font-bold text-foreground">2026년 8월</p>
                <span className="rounded-full bg-muted px-2.5 py-1 text-xs font-semibold text-muted-foreground">이번 주</span>
            </div>
            <div className="grid grid-cols-7 gap-1">
                {WEEK.map((d) => (
                    <div key={d.day} className={cn("rounded-lg px-0.5 pb-2 pt-1.5", d.today && "bg-accent")}>
                        <p className={cn("text-center text-[11px] font-semibold", d.day === "일" ? "text-destructive" : "text-muted-foreground")}>
                            {d.day}
                        </p>
                        <p className={cn("mt-0.5 text-center text-[13px] font-bold", d.today ? "text-primary" : "text-foreground")}>
                            {d.date}
                        </p>
                        <div className="mt-1.5 flex flex-col gap-1">
                            {d.shifts.map(([name, tone], i) => (
                                <span key={i} className={cn("truncate rounded px-1 py-[3px] text-center text-[10px] font-semibold leading-none", TONE[tone])}>
                    {name}
                  </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
