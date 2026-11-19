import { cn } from '@repo/ui/lib/utils';
import { CONTAINER } from '@/lib/ui';
import { TERMS_URL, PRIVACY_URL, ACCOUNT_DELETION_URL } from '@/lib/links';

export default function Footer() {
  return (
    <footer className='border-t border-border bg-muted'>
      <div
        className={cn(
          CONTAINER,
          'flex flex-col gap-10 py-16 sm:flex-row sm:items-start sm:justify-between lg:py-20',
        )}
      >
        {/* 좌: 브랜드 */}
        <div className='flex flex-col gap-2'>
          <p className='text-xl font-bold tracking-[-0.02em] text-foreground'>
            나날이
          </p>
          <p className='text-sm text-muted-foreground'>
            매장 스케줄을 한 곳에서.
          </p>
        </div>

        {/* 우: 사업자 정보 + 링크 */}
        <div className='flex flex-col gap-4 sm:items-end sm:text-right'>
          <div className='flex flex-col gap-2'>
            <h2 className='text-[15px] font-semibold text-muted-foreground'>
              사업자 정보
            </h2>
            <p className='text-[13px] leading-[1.6] tracking-[0.01em] text-muted-foreground/80'>
              상호: 나날이 | 대표: 이지현
              <br />
              사업자등록번호: 000-00-00000
              <br />
              주소: 서울특별시 000
              <br />
              문의: nanaly.schedule@gmail.com
            </p>
          </div>
          <nav className='flex items-center gap-5 text-[13px] font-medium text-muted-foreground'>
            {/* <a href={TERMS_URL} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-foreground">이용약관</a> */}
            <a
              href={PRIVACY_URL}
              className='transition-colors hover:text-foreground'
            >
              개인정보처리방침
            </a>
            <a
              href={ACCOUNT_DELETION_URL}
              className='transition-colors hover:text-foreground'
            >
              계정 삭제 안내
            </a>
          </nav>
          <p className='text-[13px] text-muted-foreground/80'>
            © 2026 나날이. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
