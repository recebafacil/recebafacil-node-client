import type { BoletoStatusType } from './types';

export interface Boleto {
  id: string;
  resource: 'boleto';
  providerId: string;
  customerId: string;
  status: BoletoStatusType;
  description: string | null;
  expirationDate: string | null;
  paymentLimitDate: string | null;
  paidAt: string | null;
  bankCode: string;
  recipient: string;
  url: string;
  barcode: string;
  address: string | null;
  accepted: boolean;
  printed: boolean;
  downloaded: boolean;
  metadata: object | null;
  createdAt: string;
  updatedAt: string;
}
