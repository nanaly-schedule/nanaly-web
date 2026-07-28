import { SiteNav } from "./_components/SiteNav";
import { Footer } from "./_components/Footer";
import { Section } from "./_components/Section";

export default function Home() {
    return (
        <>
            <SiteNav />
            <main id="top">
                <Section id="hero">
                    <h1 className="text-3xl font-bold text-foreground sm:text-5xl">나날이</h1>
                    <p className="mt-4 text-muted-foreground">여기에 Hero가 들어갑니다.</p>
                </Section>

                <Section id="intro" className="bg-muted">
                    <p className="text-muted-foreground">문제제기 / 소개 자리</p>
                </Section>

                <Section id="features">
                    <p className="text-muted-foreground">기능 섹션 자리 (스샷 들어갈 곳)</p>
                </Section>

                <Section id="cta" className="bg-muted">
                    <p className="text-muted-foreground">사전예약 폼 자리</p>
                </Section>
            </main>
            <Footer />
        </>
    );
}
