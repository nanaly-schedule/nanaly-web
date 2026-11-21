export type InvitePreview = {
  valid: boolean;
  storeName?: string;
  storeId?: string;
  appLink?: string;
  openApp?: boolean;
};

export type InviteFlowState =
  | { type: 'loading' }
  | { type: 'success'; data: InvitePreview }
  | { type: 'expired' }
  | { type: 'app' };
