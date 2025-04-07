import type { BoletoInterface } from '@/interfaces/boleto-interface';
import type { CardInterface } from '@/interfaces/card-interface';
import type { PixInterface } from '@/interfaces/pix-interface';

import type {
  PaymentMethodType,
  ProductStatusType,
  TransactionStatusType,
} from './types';

export interface HistoryTransactionInterface {
  id: string;
  amount: string;
  status: TransactionStatusType;
  authorizer: string;
  created_at: string;
  transaction: string;
  authorizer_id: string;
  response_code: string;
  operation_type: string;
  response_message: string;
  authorization_nsu: string;
  authorization_code: string;
  gatewayResponseTime: string;
}

export interface TransactionOfferInterface<Metadata = Record<string, unknown>> {
  id: string;
  resource: 'transaction.product.offer';
  product: string;
  main: boolean;
  amount: number;
  dateStart: string;
  automaticallyRecoverSales: boolean;
  metadata: Metadata | null;
  created_at: string;
  updated_at: string;
}

export interface TransactionProductInterface<
  Metadata = Record<string, unknown>,
  OfferMetadata = Record<string, unknown>,
> {
  id: string;
  resource: 'transaction.product';
  customer: string;
  checkout: string;
  transaction: string;
  offer: TransactionOfferInterface<OfferMetadata>;
  name: string;
  description: string;
  image: string | null;
  status: ProductStatusType;
  metadata: Metadata | null;
  created_at: string;
  updated_at: string;
}

export interface TransactionInterface<
  PaymentMethod = CardInterface | BoletoInterface | PixInterface,
  Metadata = Record<string, unknown>,
  ProductMetadata = Record<string, unknown>,
  OfferMetadata = Record<string, unknown>,
> {
  id: string;
  resource: 'transaction';
  on_behalf_of: string;
  customer: string;
  coupon: string | null;
  status: TransactionStatusType;
  amount: number;
  original_amount: number;
  discount_amount: number;
  currency: string;
  description: string;
  statement_descriptor: string;
  payment_type: PaymentMethodType;
  payment_method: PaymentMethod;
  products: TransactionProductInterface<ProductMetadata, OfferMetadata>[];
  transaction_number: string;
  gateway_authorizer: string;
  sales_receipt: string;
  installment_plan: number | null;
  refunded: boolean;
  voided: boolean;
  captured: boolean;
  fees: string;
  expected_on: string;
  voided_at: string | null;
  history: HistoryTransactionInterface[];
  metadata: Metadata | null;
  created_at: string;
  updated_at: string;
}
