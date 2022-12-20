import type { PlanInterface } from '../interfaces';

export type CreatePlanDTO = Pick<
  PlanInterface,
  | 'name'
  | 'frequency'
  | 'interval'
  | 'payment_methods'
  | 'amount'
  | 'setup_amount'
  | 'currency'
  | 'duration'
  | 'metadata'
>;

export type UpdatePlanDTO = Partial<
  Pick<
    PlanInterface,
    | 'name'
    | 'frequency'
    | 'interval'
    | 'payment_methods'
    | 'amount'
    | 'setup_amount'
    | 'currency'
    | 'duration'
    | 'metadata'
  >
>;
