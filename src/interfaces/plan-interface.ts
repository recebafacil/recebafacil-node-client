import type { PaymentMethodType, PlanFrequencyType } from './types';

export interface PlanInterface<T = Record<string, unknown>> {
  id: string;
  resource: 'plan';
  marketplace: string;
  name: string;
  frequency: PlanFrequencyType;
  interval: number;
  payment_methods: PaymentMethodType[];
  amount: number;
  setup_amount: number;
  currency: string;
  description: string;
  duration: number;
  metadata: T | null;
  created_at: string;
  updated_at: string;
}
