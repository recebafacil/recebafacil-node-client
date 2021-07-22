import { PlanInterface } from '../interfaces';

export type CreatePlanDTO = Pick<
  PlanInterface,
  | 'name'
  | 'frequency'
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
    | 'payment_methods'
    | 'amount'
    | 'setup_amount'
    | 'currency'
    | 'duration'
  >
>;
