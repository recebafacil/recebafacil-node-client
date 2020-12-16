export interface InvoiceInterface<T = Record<string, unknown>> {
  id: string;
  resource: 'invoice';
  subscription: string;
  customer: string;
  description: string | null;
  payment_method: 'credit' | 'boleto';
  due_date: Date;
  expiration_date: Date | null;
  amount: number;
  currency: string;
  paid_at: Date | null;
  voided_at: Date | null;
  retries: number;
  max_retries: 3;
  status: 'paid' | 'pending' | 'canceled' | 'failed';
  metadata: T | null;
  created_at: Date;
  updated_at: Date;
}
