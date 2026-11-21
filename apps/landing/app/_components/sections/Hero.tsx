import { cn } from '@repo/ui/lib/utils';
import Image from 'next/image';
import { CONTAINER } from '@/lib/ui';
import Reveal from '@/app/_components/Reveal';
import { ANDROID_STORE_URL, IOS_STORE_URL } from '@/lib/links';

export default function Hero() {
  return (
    <section
      id='hero'
      className='relative overflow-hidden bg-gradient-to-b from-white to-[#eaf2fe]'
    >
      {/* 사진 — 폰: 가운데 / 태블릿+(md): 오른쪽 54% */}
      <div className='absolute inset-0 md:left-auto md:right-0 md:w-[54%]'>
        <Image
          src='/hero/mockup.png'
          alt='나날이로 매장 스케줄을 확인하는 모습'
          fill
          priority
          sizes='(max-width: 768px) 100vw, 54vw'
          className='hero-photo object-cover object-center'
        />
      </div>
      {/* 오버레이 — 태블릿+ 만 (왼쪽 텍스트 가독성) */}
      <div className='pointer-events-none absolute inset-0 hidden bg-gradient-to-r from-white via-white/50 to-transparent md:block' />

      {/* 텍스트 — 폰: 중앙 / 태블릿+: 왼쪽 */}
      <div className={cn(CONTAINER, 'relative z-10')}>
        <div className='max-w-xl py-24 text-center md:py-32 md:text-left lg:py-40'>
          <Reveal
            as='h1'
            className='text-[28px] font-extrabold leading-[1.2] tracking-[-0.03em] text-foreground sm:text-[44px] lg:text-[60px]'
          >
            매장 스케줄,
            <br />
            <span className='text-primary'>한 곳에서 정확하게</span>
          </Reveal>
          <Reveal
            as='p'
            delay={120}
            className='mx-auto mt-6 max-w-[440px] text-base font-medium leading-[1.55] tracking-[-0.02em] text-muted-foreground sm:text-[18px] md:mx-0'
          >
            관리자와 근무자가 같은 화면에서
            <br />
            근무 일정을 확인하고 공유해요.
          </Reveal>
          <Reveal
            delay={220}
            className='mt-8 flex flex-wrap items-center justify-center gap-3 md:justify-start'
          >
            <a
              href={ANDROID_STORE_URL}
              aria-label='구글 앱스토어에서 나날이 다운로드'
              className='transition-transform hover:-translate-y-0.5'
            >
              <Image
                src='/GoogleStore download button.png'
                alt='Google Play에서 다운로드'
                width={180}
                height={54}
                className='h-[54px] w-auto'
              />
            </a>
            <a
              href={IOS_STORE_URL}
              aria-label='애플 앱스토어에서 나날이 다운로드'
              className='transition-transform hover:-translate-y-0.5'
            >
              <Image
                src='/AppStore download button.png'
                alt='App Store에서 다운로드'
                width={180}
                height={54}
                className='h-[54px] w-auto'
              />
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
