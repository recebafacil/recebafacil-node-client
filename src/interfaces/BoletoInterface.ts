import { BoletoStatusType } from './types';

export interface BoletoInterface<T = Record<string, unknown>> {
  id: string;
  resource: 'boleto';
  customer: string;
  status: BoletoStatusType;
  description: string;
  expiration_date: Date;
  payment_limit_date: Date | null;
  paid_at: Date | null;
  bank_code: string;
  recipient: string;
  uri: string;
  barcode: string;
  address: string | null;
  accpeted: boolean;
  printed: boolean;
  downloaded: boolean;
  metadata: T | null;
  created_at: Date;
  updated_at: Date;
}
