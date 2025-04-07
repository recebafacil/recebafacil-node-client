import type { TransactionPaymentType } from '@/interfaces/transaction';

enum ESubscriptionStatus {
  ACTIVE = 'active',
  SUSPENDED = 'suspended',
  CANCELED = 'canceled',
  EXPIRED = 'expired',
}

export type SubscriptionStatus = `${ESubscriptionStatus}`;

export interface Subscription<Metadata = object> {
  id: string;
  resource: 'subscription';
  providerId: string;
  marketplaceId: string;
  sellerId: string;
  planId: string;
  buyerId: string;
  cardId: string | null;
  description: string | null;
  paymentMethod: TransactionPaymentType;
  dueDate: string;
  dueSinceDate: string | null;
  expirationDate: string | null;
  amount: number;
  currency: string;
  status: SubscriptionStatus;
  suspendedAt: string | null;
  metadata: Metadata | null;
  createdAt: string;
  updatedAt: string;
}
