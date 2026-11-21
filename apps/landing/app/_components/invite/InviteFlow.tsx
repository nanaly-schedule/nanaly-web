'use client';

import { useEffect, useState } from 'react';
import type { InviteFlowState, InvitePreview } from '@/types/invite';
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

        if (!response.ok || !payload) {
          setState({ type: 'expired' });
          return;
        }

        const data = payload.data ?? payload;
        const preview: InvitePreview = {
          valid: payload.valid ?? data.valid ?? true,
          storeName: data.storeName ?? data.store?.name,
          storeId: data.storeId ?? data.store?.id,
          appLink: data.appLink,
          openApp: data.openApp,
        };

        if (!preview.valid) {
          setState({ type: 'expired' });
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
        if (!cancelled) setState({ type: 'expired' });
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
