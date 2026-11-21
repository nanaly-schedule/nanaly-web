import React from 'react';
import InviteFlow from '@/app/_components/invite/InviteFlow';

type InvitePageProps = {
  params: Promise<{ id: string }>;
};

export default async function InvitePage({ params }: InvitePageProps) {
  const { id } = await params;

  return <InviteFlow inviteId={id} />;
}
