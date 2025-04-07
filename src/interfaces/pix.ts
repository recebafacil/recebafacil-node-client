export interface Pix {
  id: string;
  resource: 'pix';
  providerId: string;
  customerId: string | null;
  provider: string;
  expirationDate: string;
  link: string;
  qrcode: string;
  metadata: object | null;
  createdAt: string;
  updatedAt: string;
}
