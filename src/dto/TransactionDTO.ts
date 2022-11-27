import type { PaymentMethodType } from '../interfaces';

type LateFeeModeType = 'FIXED' | 'PERCENTAGE';
type InterestModeType =
  | 'DAILY_AMOUNT'
  | 'DAILY_PERCENTAGE'
  | 'MONTHLY_PERCENTAGE';
type DiscountModeType = 'FIXED' | 'PERCENTAGE';

interface DiscountInterface {
  mode: DiscountModeType;
  amount?: number;
  percentage?: number;
  limit_date: string;
}

interface InterestInterface {
  mode: InterestModeType;
  amount?: number;
  percentage?: number;
}

interface LateFeeInterface {
  mode: LateFeeModeType;
  amount?: number;
  percentage?: number;
}

interface BillingInstructionsInterface {
  late_fee?: LateFeeInterface;
  interest?: InterestInterface;
  discount?: DiscountInterface[];
}

interface PaymentMethodInterface {
  expiration_date?: string | null;
  payment_limit_date?: string | null;
  body_instructions?: string[];
  billing_instructions?: BillingInstructionsInterface;
}

interface CardInterface {
  holder_name: string;
  expiration_month: string;
  expiration_year: string;
  card_number: string;
  security_code: string;
}

export type TransactionDTO = {
  amount: number;
  currency: string;
  description: string;
  payment_type: PaymentMethodType;
  on_behalf_of: string;
  customer: string;
  card_id?: string;
  card?: CardInterface;
  statement_descriptor?: string | null;
  capture?: boolean;
  number_installments?: number;
  payment_method?: PaymentMethodInterface;
  metadata?: Record<string, unknown>;
};
