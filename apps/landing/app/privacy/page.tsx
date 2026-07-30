import type { Metadata } from "next";
import Link from "next/link";
import { cn } from "@repo/ui/lib/utils";
import { CONTAINER } from "@/lib/ui";

export const metadata: Metadata = {
    title: "개인정보처리방침",
    description: "나날이 개인정보처리방침",
    alternates: { canonical: "/privacy" },
};

const sections = [
    {
        title: "1. 수집하는 개인정보 항목",
        body: [
            "서비스는 다음과 같은 개인정보를 수집합니다.",
            "① 회원가입 및 로그인",
            "이름",
            "이메일 주소",
            "비밀번호",
            "※ 이메일 인증을 통해 회원가입이 진행됩니다.",
            "② 서비스 이용 과정에서 자동 수집",
            "접속 IP 주소",
            "기기 정보 (OS, 디바이스 정보)",
            "접속 로그 및 이용 기록",
            "③ 서비스 기능 이용 시",
            "소속 매장 정보",
            "근무 스케줄 정보",
            "사용자 역할 정보 (관리자, 직원 등)",
        ],
    },
    {
        title: "2. 개인정보의 수집 및 이용 목적",
        body: [
            "서비스는 수집한 개인정보를 다음의 목적을 위해 이용합니다.",
            "회원 가입 및 이메일 기반 본인 확인",
            "스케줄 관리 및 공유 기능 제공",
            "매장 및 직원 관리 기능 제공",
            "공지사항 및 알림 전달",
            "고객 문의 응대",
            "서비스 이용 통계 및 개선",
            "부정 이용 방지 및 보안 유지",
        ],
    },
    {
        title: "3. 개인정보의 보유 및 이용 기간",
        body: [
            "서비스는 개인정보 수집 및 이용 목적이 달성된 후에는 해당 정보를 지체 없이 파기합니다.",
            "단, 관련 법령에 따라 다음과 같이 일정 기간 보관할 수 있습니다.",
            "계약 또는 청약철회 등에 관한 기록: 5년",
            "소비자 불만 또는 분쟁 처리 기록: 3년",
            "접속 로그 기록: 3개월",
            "회원 탈퇴 시 개인정보는 즉시 삭제됩니다.",
        ],
    },
    {
        title: "4. 개인정보의 제3자 제공",
        body: [
            "서비스는 이용자의 개인정보를 외부에 제공하지 않습니다.",
            "다만, 아래의 경우에는 예외로 합니다.",
            "이용자가 사전에 동의한 경우",
            "법령에 따라 제공이 요구되는 경우",
        ],
    },
    {
        title: "5. 개인정보 처리의 위탁",
        body: [
            "서비스는 원활한 운영을 위해 다음과 같이 개인정보 처리를 외부에 위탁하고 있습니다.",
            "Google Firebase: 사용자 인증, 데이터 저장 및 관리",
            "이메일 발송 서비스 (예: Firebase Authentication / SMTP 서버 등): 이메일 인증 및 알림 발송",
            "위탁된 업체는 관련 법령에 따라 개인정보를 안전하게 처리합니다.",
        ],
    },
    {
        title: "6. 이용자의 권리 및 행사 방법",
        body: [
            "이용자는 언제든지 자신의 개인정보에 대해 다음과 같은 권리를 행사할 수 있습니다.",
            "개인정보 조회",
            "수정 및 삭제 요청",
            "처리 정지 요청",
            "권리 행사는 서비스 내 기능 또는 아래의 연락처를 통해 요청할 수 있습니다.",
        ],
    },
    {
        title: "7. 개인정보 보호를 위한 조치",
        body: [
            "서비스는 개인정보 보호를 위해 다음과 같은 조치를 취하고 있습니다.",
            "개인정보 암호화 저장",
            "접근 권한 최소화 및 관리",
            "보안 시스템 운영",
            "정기적인 보안 점검",
        ],
    },
    {
        title: "8. 개인정보 파기 절차 및 방법",
        body: [
            "개인정보는 보유 기간이 경과하거나 처리 목적이 달성된 경우 지체 없이 파기됩니다.",
            "전자적 파일: 복구 불가능한 방식으로 영구 삭제",
            "종이 문서: 분쇄 또는 소각",
        ],
    },
    {
        title: "9. 개인정보 보호책임자",
        body: [
            "서비스는 개인정보 관련 문의 및 처리를 위해 아래와 같이 개인정보 보호책임자를 지정하고 있습니다.",
            "책임자: 이지현",
            "이메일: justjh30@gmail.com",
        ],
    },
    {
        title: "10. 개인정보 처리방침의 변경",
        body: [
            "본 개인정보 처리방침은 관련 법령 또는 서비스 변경에 따라 수정될 수 있습니다.",
            "변경 시 서비스 내 공지사항을 통해 사전 안내합니다.",
        ],
    },
];

export default function PrivacyPage() {
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
                            개인정보처리방침
                        </h1>
                    </header>

                    <p className="mt-8 text-[15px] leading-8 text-muted-foreground sm:text-base">
                        본 서비스(이하 &quot;서비스&quot;)는 이용자의 개인정보를 중요하게 생각하며, 「개인정보 보호법」 등 관련 법령을 준수합니다. 본 개인정보 처리방침은 이용자의 개인정보가 어떤 방식으로 수집, 이용, 보호되는지를 설명합니다.
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
