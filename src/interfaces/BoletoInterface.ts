import type { BoletoStatusType } from './types';

export interface BoletoInterface<T = Record<string, unknown>> {
  id: string;
  resource: 'boleto';
  customer: string;
  status: BoletoStatusType;
  description: string;
  expiration_date: string;
  payment_limit_date: string | null;
  paid_at: string | null;
  bank_code: string;
  recipient: string;
  uri: string;
  barcode: string;
  address: string | null;
  accepted: boolean;
  printed: boolean;
  downloaded: boolean;
  metadata: T | null;
  created_at: string;
  updated_at: string;
}
