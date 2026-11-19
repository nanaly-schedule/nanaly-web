import ComingSoon from '@/app/_components/sections/ComingSoon';
import Cta from '@/app/_components/sections/Cta';
import Features from '@/app/_components/sections/Features';
import Intro from '@/app/_components/sections/Intro';
import Roles from '@/app/_components/sections/Roles';
import SiteNav from './_components/SiteNav';
import Footer from './_components/Footer';
import Hero from 'app/_components/sections/Hero';

export default function Home() {
  return (
    <div id='top'>
      <SiteNav />
      <main className='overflow-hidden bg-white'>
        <Hero />
        <Intro />
        <Roles />
        <Features />
        <ComingSoon />
        {/* <Cta /> */}
      </main>
      <Footer />
    </div>
  );
}
