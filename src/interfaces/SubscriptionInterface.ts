import type { SubscriptionStatusType } from './types';

export interface SubscriptionInterface {
  id: string;
  resource: 'subscription';
  plan: string;
  customer: string;
  description: string | null;
  payment_method: 'credit';
  due_date: string;
  due_since_date: string | null;
  expiration_date: string | null;
  amount: number | null;
  currency: string;
  status: SubscriptionStatusType;
  suspended_at: string | null;
  created_at: string;
  updated_at: string;
}
