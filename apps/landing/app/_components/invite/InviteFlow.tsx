'use client';

import { useEffect, useState } from 'react';
import type {
  InviteFlowState,
  InvitePreview,
  InvitePreviewError,
} from '@/types/invite';
import { createInviteAppLink } from '@/lib/links';
import InviteState from './InviteState';

export default function InviteFlow({ inviteId }: { inviteId: string }) {
  const [state, setState] = useState<InviteFlowState>({ type: 'loading' });

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
        window.location.href = appLink;
      }}
    />
  );
}
