import type { Boleto } from '@/interfaces/boleto';
import type { Buyer } from '@/interfaces/buyer';
import type { Card } from '@/interfaces/card';
import type { Checkout } from '@/interfaces/checkout';
import type { Offer } from '@/interfaces/offer';
import type { Pix } from '@/interfaces/pix';
import type { Plan } from '@/interfaces/plan';
import type { Product } from '@/interfaces/product';
import type { Subscription } from '@/interfaces/subscription';

enum EPaymentType {
  CREDIT = 'credit',
  BOLETO = 'boleto',
  PIX = 'pix',
}

enum EStatus {
  NEW = 'new',
  PENDING = 'pending',
  PRE_AUTHORIZED = 'pre_authorized',
  SUCCEEDED = 'succeeded',
  FAILED = 'failed',
  REVERSED = 'reversed',
  CANCELED = 'canceled',
  REFUNDED = 'refunded',
  DISPUTE = 'dispute',
  CHARGED_BACK = 'charged_back',
}

export type TransactionPaymentType = `${EPaymentType}`;

export type TransactionStatus = `${EStatus}`;

interface TransactionSource<Metadata = object> {
  id: string;
  resource: 'transaction';
  providerId: string | null;
  marketplaceId: string;
  sellerId: string;
  buyerId: string;
  couponId: string;
  chargeId: string;
  paymentMethodId: string;
  salesReceiptId: string;
  amount: number;
  captured: boolean;
  currency: string;
  description: string | null;
  discountAmount: number;
  expectedOn: string | null;
  fees: string;
  gatewayAuthorizer: string | null;
  history: object[];
  installmentPlan: number;
  originalAmount: number;
  paymentType: TransactionPaymentType;
  refunded: boolean;
  statementDescriptor: string;
  status: TransactionStatus;
  transactionNumber: string | null;
  voided: boolean;
  voidedAt: string | null;
  metadata: Metadata | null;
  createdAt: string;
  updatedAt: string;
}

export interface TransactionProduct {
  product: Product;
  offer: Offer;
}

export interface TransactionPlanProduct {
  subscription: Subscription;
  plan: Plan;
}

export type TransactionProductType =
  | TransactionProduct
  | TransactionPlanProduct;

export interface Transaction<Metadata = object>
  extends TransactionSource<Metadata> {
  buyer?: Buyer;
  paymentMethod?: Pix | Boleto | Card;
  products: TransactionProductType[];
  checkout?: Checkout;
}
