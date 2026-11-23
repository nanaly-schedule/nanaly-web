export type InvitePreview = {
  storeName: string;
  openApp?: boolean;
  appLink?: string;
};

export type InvitePreviewError = {
  statusCode: number;
  errorCode: 'VALIDATION_FAILED';
  message: string;
  timestamp: string;
};

export type InviteFlowState =
  | { type: 'verifying'; data: InvitePreview }
  | { type: 'success'; data: InvitePreview }
  | { type: 'expired'; message: string }
  | { type: 'app' };
