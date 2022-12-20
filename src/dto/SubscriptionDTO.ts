import type { SubscriptionInterface } from '../interfaces';

export type CreateSubscriptionDTO = Pick<
  SubscriptionInterface,
  | 'plan'
  | 'customer'
  | 'description'
  | 'payment_method'
  | 'due_date'
  | 'currency'
  | 'metadata'
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
    | 'metadata'
  >
>;
