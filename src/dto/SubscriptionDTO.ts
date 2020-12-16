import { SubscriptionInterface } from '../interfaces/SubscriptionInterface';

export type CreateSubscriptionDTO = Pick<
  SubscriptionInterface,
  | 'plan'
  | 'customer'
  | 'description'
  | 'payment_method'
  | 'due_date'
  | 'currency'
>;

export type UpdateSubscriptionDTO = Partial<
  Pick<
    SubscriptionInterface,
    | 'plan'
    | 'customer'
    | 'description'
    | 'payment_method'
    | 'due_date'
    | 'currency'
  >
>;
