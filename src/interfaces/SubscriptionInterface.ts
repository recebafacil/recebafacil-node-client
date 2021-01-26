import { SubscriptionStatusType } from './types';

export interface SubscriptionInterface {
  id: string;
  resouce: 'subscription';
  plan: string;
  customer: string;
  description: string | null;
  payment_method: 'credit';
  due_date: Date;
  due_since_date: Date | null;
  expiration_date: Date | null;
  amount: number | null;
  currency: string;
  status: SubscriptionStatusType;
  suspended_at: Date | null;
  created_at: Date;
  updated_at: Date;
}
