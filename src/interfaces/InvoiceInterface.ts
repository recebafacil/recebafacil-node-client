import type { PaymentMethodType, InvoiceStatusType } from './types';

export interface InvoiceInterface<T = Record<string, unknown>> {
  id: string;
  resource: 'invoice';
  subscription: string;
  customer: string;
  description: string | null;
  payment_method: PaymentMethodType;
  due_date: string;
  expiration_date: string | null;
  amount: number;
  currency: string;
  paid_at: string | null;
  voided_at: string | null;
  retries: number;
  max_retries: 3;
  status: InvoiceStatusType;
  metadata: T | null;
  created_at: string;
  updated_at: string;
}
