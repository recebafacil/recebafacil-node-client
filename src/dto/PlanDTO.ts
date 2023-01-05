import type { PlanInterface } from '../interfaces';
import type { RequiredBy } from '../types';

export type CreatePlanDTO = RequiredBy<
  Partial<
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
  >,
  | 'name'
  | 'frequency'
  | 'interval'
  | 'payment_methods'
  | 'amount'
  | 'setup_amount'
  | 'currency'
  | 'duration'
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
