import type { Metadata } from "next";
import Link from "next/link";
import { cn } from "@repo/ui/lib/utils";
import { CONTAINER } from "@/lib/ui";

export const metadata: Metadata = {
    title: "계정 삭제 안내",
    description: "나날이 계정 삭제 요청 방법 안내",
    alternates: { canonical: "/account-deletion" },
};

const sections = [
    {
        title: "1. 계정 삭제 요청 방법",
        body: [
            "나날이 앱에 로그인한 뒤 마이 화면에서 계정 삭제를 요청할 수 있습니다.",
            "앱 내 로그인 > 마이 > 의견 보내기",
            "의견 보내기 화면에서 계정 삭제 요청 의사를 남겨주시면 담당자가 요청 내용을 확인한 후 처리합니다.",
        ],
    },
    {
        title: "2. 요청 시 포함하면 좋은 내용",
        body: [
            "가입한 이메일 주소",
            "계정 삭제 요청 문구",
            "본인 확인 또는 처리 안내를 받을 수 있는 연락 가능한 정보",
        ],
    },
    {
        title: "3. 삭제되는 정보",
        body: [
            "계정 삭제가 처리되면 회원 정보와 서비스 이용을 위해 저장된 개인정보가 삭제됩니다.",
            "소속 매장, 근무 스케줄 등 서비스 이용 과정에서 생성된 정보도 관련 정책에 따라 삭제 또는 분리 처리됩니다.",
            "단, 관계 법령에 따라 보관이 필요한 기록은 정해진 기간 동안 보관될 수 있습니다.",
        ],
    },
    {
        title: "4. 처리 안내",
        body: [
            "요청 접수 후 계정 확인과 삭제 처리를 진행합니다.",
            "처리 과정에서 추가 확인이 필요한 경우 의견 보내기에 남긴 연락처 또는 가입 이메일로 안내드릴 수 있습니다.",
            "삭제가 완료된 계정은 복구가 어려울 수 있으므로 필요한 정보는 미리 확인해 주세요.",
        ],
    },
];

export default function AccountDeletionPage() {
    return (
        <main className="min-h-screen bg-white">
            <section className={cn(CONTAINER, "py-10 sm:py-16 lg:py-20")}>
                <Link
                    href="/"
                    className="inline-flex text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
                >
                    나날이 홈으로
                </Link>

                <article className="mt-10 max-w-[820px]">
                    <header className="border-b border-border pb-8">
                        <p className="text-sm font-semibold text-primary">나날이</p>
                        <h1 className="mt-3 text-3xl font-bold text-foreground sm:text-4xl">
                            계정 삭제 안내
                        </h1>
                    </header>

                    <p className="mt-8 text-[15px] leading-8 text-muted-foreground sm:text-base">
                        나날이 계정 삭제를 원하시는 경우 앱 내 의견 보내기 기능을 통해 요청할 수 있습니다. 요청이 접수되면 계정 확인 후 개인정보처리방침 및 관련 법령에 따라 처리됩니다.
                    </p>

                    <div className="mt-10 flex flex-col gap-10">
                        {sections.map((section) => (
                            <section key={section.title}>
                                <h2 className="text-xl font-bold text-foreground">{section.title}</h2>
                                <div className="mt-4 flex flex-col gap-2 text-[15px] leading-7 text-muted-foreground">
                                    {section.body.map((line) => (
                                        <p key={line}>{line}</p>
                                    ))}
                                </div>
                            </section>
                        ))}
                    </div>
                </article>
            </section>
        </main>
    );
}
