// 외부 링크 — 여기만 고치면 전체 반영
export const TERMS_URL = '#'; // TODO: 이용약관 링크
export const PRIVACY_URL = '/privacy';
export const ACCOUNT_DELETION_URL = '/account-deletion';

export const IOS_STORE_URL =
  'https://apps.apple.com/kr/app/%EB%82%98%EB%82%A0%EC%9D%B4-%EA%B0%80%EA%B2%8C-%EC%8A%A4%EC%BC%80%EC%A4%84-%EA%B4%80%EB%A6%AC/id6762539107';
export const ANDROID_STORE_URL =
  'https://play.google.com/store/apps/details?id=com.nanaly.app&hl=ko';

export const createInviteAppLink = (inviteId: string) =>
  `nanaly://invite/${encodeURIComponent(inviteId)}`;
