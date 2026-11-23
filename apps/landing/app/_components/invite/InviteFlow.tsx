'use client';

import { useEffect, useState } from 'react';
import type {
  InviteFlowState,
  InvitePreview,
  InvitePreviewError,
} from '@/types/invite';
import {
  ANDROID_STORE_URL,
  createInviteAppLink,
  IOS_STORE_URL,
} from '@/lib/links';
import InviteState from './InviteState';

export default function InviteFlow({ inviteId }: { inviteId: string }) {
  const [state, setState] = useState<InviteFlowState>({
    type: 'verifying',
    data: { storeName: '' },
  });

  useEffect(() => {
    let cancelled = false;

    async function previewInvite() {
      try {
        const response = await fetch(
          `/api/invite/${encodeURIComponent(inviteId)}/preview`,
          { cache: 'no-store' },
        );
        const payload = await response.json().catch(() => null);

        if (cancelled) return;

        if (!response.ok) {
          const error = payload as InvitePreviewError | null;
          setState({
            type: 'expired',
            message: error?.message ?? '유효하지 않은 초대코드입니다',
          });
          return;
        }

        const preview = payload as InvitePreview | null;

        if (!preview?.storeName) {
          setState({
            type: 'expired',
            message: '유효하지 않은 초대코드입니다',
          });
          return;
        }

        if (preview.openApp) {
          setState({ type: 'app' });
          window.location.href =
            preview.appLink ?? createInviteAppLink(inviteId);
          return;
        }

        setState({ type: 'success', data: preview });
      } catch {
        if (!cancelled) {
          setState({
            type: 'expired',
            message: '초대 정보를 확인할 수 없습니다',
          });
        }
      }
    }

    previewInvite();
    return () => {
      cancelled = true;
    };
  }, [inviteId]);

  return (
    <InviteState
      state={state}
      inviteId={inviteId}
      onOpenApp={(appLink) => {
        setState({ type: 'app' });

        const ua = navigator.userAgent.toLowerCase();
        const storeUrl = /iphone|ipad|ipod/.test(ua)
          ? IOS_STORE_URL
          : /android/.test(ua)
            ? ANDROID_STORE_URL
            : null;

        window.location.href = appLink;

        if (storeUrl) {
          window.setTimeout(() => {
            window.location.href = storeUrl;
          }, 1800);
        }
      }}
    />
  );
}
