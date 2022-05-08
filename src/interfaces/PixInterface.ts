export interface PixInterface<Metadata = Record<string, unknown>> {
  id: string;
  resource: 'pix';
  customer: string;
  provider: string;
  expiration_date: string;
  link: string;
  qrcode: string;
  metadata: Metadata | null;
  created_at: string;
  updated_at: string;
}
