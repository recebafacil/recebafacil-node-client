import type { Buyer } from '@/interfaces/buyer';
import type { Subscription } from '@/interfaces/subscription';
import type {
  Transaction,
  TransactionPaymentType,
} from '@/interfaces/transaction';

export enum EStatus {
  PAID = 'paid',
  PENDING = 'pending',
  CANCELED = 'canceled',
  FAILED = 'failed',
  EXPIRED = 'expired',
  REFUNDED = 'refunded',
}

export type InvoiceStatus = `${EStatus}`;

interface InvoiceSource<Metadata = object> {
  id: string;
  resource: 'invoice';
  providerId: string;
  marketplaceId: string;
  sellerId: string;
  buyerId: string;
  subscriptionId: string;
  description: string | null;
  paymentMethod: TransactionPaymentType;
  dueDate: string | null;
  expirationDate: string | null;
  amount: number;
  currency: string;
  paidAt: string | null;
  voidedAt: string | null;
  retries: number;
  maxRetries: number;
  status: InvoiceStatus;
  metadata: Metadata | null;
  createdAt: string;
  updatedAt: string;
}

export interface Invoice<Metadata = object> extends InvoiceSource<Metadata> {
  buyer?: Buyer;
  subscription?: Subscription;
  transactions: Transaction[];
}
