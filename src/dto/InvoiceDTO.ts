import type { InvoiceInterface } from '../interfaces';

export type CreateInvoiceDTO = Pick<
  InvoiceInterface,
  | 'subscription'
  | 'customer'
  | 'description'
  | 'payment_method'
  | 'due_date'
  | 'expiration_date'
  | 'amount'
  | 'currency'
>;

export type UpdateInvoiceDTO = Partial<
  Pick<
    InvoiceInterface,
    | 'subscription'
    | 'customer'
    | 'description'
    | 'payment_method'
    | 'due_date'
    | 'expiration_date'
    | 'amount'
    | 'currency'
  >
>;
