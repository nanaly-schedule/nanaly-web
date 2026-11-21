'use client';

import Image from 'next/image';
import type { InviteFlowState, InvitePreview } from '@/types/invite';
import {
  ANDROID_STORE_URL,
  createInviteAppLink,
  IOS_STORE_URL,
} from '@/lib/links';

function PageLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className='flex min-h-screen items-center justify-center bg-white px-5 py-12 sm:px-6'>
      <section className='flex w-full max-w-120 flex-col items-center text-center'>
        {children}
      </section>
    </main>
  );
}

function StoreActions() {
  return (
    <>
      <div className='mt-9 flex items-center gap-5'>
        <span className='h-px flex-1 bg-border' />
        <span className='shrink-0 text-sm text-muted-foreground'>
          앱이 없으신가요?
        </span>
        <span className='h-px flex-1 bg-border' />
      </div>
      <div className='mt-7 grid grid-cols-2 gap-3'>
        <a
          href={ANDROID_STORE_URL}
          target='_blank'
          rel='noopener noreferrer'
          aria-label='Google Play에서 나날이 다운로드'
          className='flex min-h-16 items-center justify-center transition-transform hover:-translate-y-0.5'
        >
          <Image
            src='/GoogleStore download button.png'
            alt='Google Play에서 다운로드'
            width={155}
            height={46}
            className='h-auto w-full max-w-38.75'
          />
        </a>
        <a
          href={IOS_STORE_URL}
          target='_blank'
          rel='noopener noreferrer'
          aria-label='App Store에서 나날이 다운로드'
          className='flex min-h-16 items-center justify-center transition-transform hover:-translate-y-0.5'
        >
          <Image
            src='/AppStore download button.png'
            alt='App Store에서 다운로드'
            width={155}
            height={46}
            className='h-auto w-full max-w-38.75'
          />
        </a>
      </div>
    </>
  );
}

function StatusIcon({ expired = false }: { expired?: boolean }) {
  if (expired) {
    return (
      <div className='flex size-24 items-center justify-center rounded-full bg-[#f1f3f7] sm:size-28'>
        <svg
          viewBox='0 0 48 48'
          aria-hidden='true'
          className='size-12 text-[#7a7f87] sm:size-14'
        >
          <circle
            cx='24'
            cy='24'
            r='16'
            fill='none'
            stroke='currentColor'
            strokeWidth='4'
          />
          <path
            d='M24 15v11l7 5'
            fill='none'
            stroke='currentColor'
            strokeWidth='4'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
        </svg>
      </div>
    );
  }

  return (
    <div className='flex size-24 items-center justify-center rounded-full bg-[#3f83f8] sm:size-28'>
      <svg
        viewBox='0 0 48 48'
        aria-hidden='true'
        className='size-12 text-white sm:size-14'
      >
        <path
          d='M12 24l8 8 16-16'
          fill='none'
          stroke='currentColor'
          strokeWidth='5'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
      </svg>
    </div>
  );
}

export default function InviteState({
  state,
  inviteId,
  onOpenApp,
}: {
  state: InviteFlowState;
  inviteId: string;
  onOpenApp: (appLink: string) => void;
}) {
  if (state.type === 'loading') {
    return (
      <PageLayout>
        <div
          aria-label='초대 링크 확인 중'
          className='size-12 animate-spin rounded-full border-4 border-[#e6edff] border-t-primary'
        />
        <p className='mt-5 text-base font-medium text-muted-foreground'>
          초대 링크를 확인하고 있어요
        </p>
      </PageLayout>
    );
  }

  if (state.type === 'expired') {
    return (
      <PageLayout>
        <StatusIcon expired />
        <h1 className='mt-9 text-[22px] font-extrabold leading-tight tracking-[-0.02em] text-foreground sm:text-[24px]'>
          만료된 초대 링크예요.
        </h1>
        <p className='mt-6 text-[17px] leading-[1.55] text-muted-foreground sm:text-[18px]'>
          링크가 유효하지 않거나
          <br />
          이미 사용된 초대 링크예요.
        </p>
      </PageLayout>
    );
  }

  if (state.type === 'app') {
    return (
      <PageLayout>
        <Image
          src='/app_logo.png'
          alt='나날이 앱 로고'
          width={112}
          height={112}
          priority
          className='size-28 rounded-4xl object-contain'
        />
        <h1 className='mt-8 text-[22px] font-extrabold leading-tight tracking-[-0.02em] text-foreground sm:text-[24px]'>
          앱으로 이동 중이에요.
        </h1>
        <p className='mt-4 text-[17px] leading-[1.55] text-muted-foreground sm:text-[18px]'>
          잠시만 기다려주세요.
        </p>
        <div
          aria-label='앱으로 이동 중'
          className='mt-8 size-16 animate-spin rounded-full border-[5px] border-[#e9edf3] border-t-[#5a86d8]'
        />
      </PageLayout>
    );
  }

  const preview: InvitePreview = state.data;
  const appLink = preview.appLink ?? createInviteAppLink(inviteId);

  return (
    <PageLayout>
      <StatusIcon />
      <h1 className='mt-9 text-[22px] font-extrabold leading-tight tracking-[-0.02em] text-foreground sm:text-[24px]'>
        매장 인증이 완료되었어요.
      </h1>
      {preview.storeName && (
        <p className='mt-3 text-base font-semibold text-primary'>
          {preview.storeName}
        </p>
      )}
      <p className='mt-6 text-[17px] leading-[1.55] text-muted-foreground sm:text-[18px]'>
        지금부터 앱에서
        <br />
        매장 스케줄을 확인할 수 있어요.
      </p>
      <div className='mt-10 w-full px-8 sm:px-9'>
        <button
          type='button'
          onClick={() => onOpenApp(appLink)}
          className='flex h-14 w-full items-center justify-center rounded-2xl bg-primary px-6 text-[17px] font-semibold text-white shadow-[0_8px_18px_rgba(59,130,246,0.18)]'
        >
          앱으로 이동하기
        </button>
        <StoreActions />
      </div>
    </PageLayout>
  );
}
