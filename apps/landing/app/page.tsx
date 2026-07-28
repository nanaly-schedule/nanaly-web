import SiteNav from "./_components/SiteNav";
import Footer from "./_components/Footer";
import Hero from "./_components/Hero";

export default function Home() {
    return (
        <div id="top">
            <SiteNav />
            <main className="overflow-hidden bg-white">
                <Hero />
                {/* 다음: Intro / 핵심 / Features(스샷) / 미리보기 / CTA */}
            </main>
            <Footer />
        </div>
    );
}
