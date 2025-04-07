import type { TransactionPaymentType } from '@/interfaces/transaction';

import type { PlanFrequencyType } from './types';

export interface Plan<Metadata = object> {
  id: string;
  resource: 'plan';
  providerId: string | null;
  marketplaceId: string;
  name: string;
  frequency: PlanFrequencyType;
  interval: number;
  paymentMethods: TransactionPaymentType[];
  amount: number;
  setupAmount: number;
  currency: string;
  description: string | null;
  duration: number;
  metadata: Metadata | null;
  modified: boolean;
  createdAt: string;
  updatedAt: string;
}
