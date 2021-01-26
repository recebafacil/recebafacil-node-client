import { PaymentMethodType, TransactionStatusType } from './types';

export interface HistoryTransactionInterface {
  id: string;
  amount: string;
  status: TransactionStatusType;
  authorizer: string;
  created_at: Date;
  transaction: string;
  authorizer_id: string;
  response_code: string;
  operation_type: string;
  response_message: string;
  authorization_nsu: string;
  authorization_code: string;
  gatewayResponseTime: string;
}

export interface TransactionInterface<
  PaymentMethod,
  T = Record<string, unknown>
> {
  id: string;
  resource: 'transaction';
  on_behalf_of: string;
  customer: string;
  status: TransactionStatusType;
  amount: number;
  original_amount: number;
  currency: string;
  description: string;
  statement_descriptor: string;
  payment_type: PaymentMethodType;
  paymentMethod: PaymentMethod;
  transaction_number: string;
  gateway_authorizer: string;
  sales_receipt: string;
  installment_plan: number | null;
  refunded: boolean;
  voided: boolean;
  captured: boolean;
  fees: string;
  expected_on: Date;
  voided_at: Date | null;
  history: HistoryTransactionInterface[];
  metadata: T | null;
  created_at: Date;
  updated_at: Date;
}
