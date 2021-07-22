import { PaymentMethodType, PlanFrequencyType } from './types';

export interface PlanInterface {
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
  created_at: string;
  updated_at: string;
}
