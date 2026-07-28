import Image from "next/image";

export default function DashboardMedia() {
    return (
        <div className="relative mx-auto w-full max-w-[300px] sm:max-w-[340px]">
            {/* 메인 폰 (프레임 포함) */}
            <Image src="/screens/dashboard/main.png" alt="매장 대시보드 화면" width={1247} height={2291}
                   sizes="(max-width: 1024px) 80vw, 340px" className="h-auto w-full" />

            {/* 툴팁 1 (895×629) — 좌상단에 떠 있음 */}
            <Image src="/screens/dashboard/tip-1.png" alt="" aria-hidden width={895} height={629}
                   className="absolute left-[-14%] top-[13%] w-[52%] drop-shadow-xl" />

            {/* 툴팁 2 (1303×243) — 하단 가로로 떠 있음 */}
            <Image src="/screens/dashboard/tip-2.png" alt="" aria-hidden width={1303} height={243}
                   className="absolute left-[0%] top-[50%] w-[104%] drop-shadow-xl" />
        </div>
    );
}
