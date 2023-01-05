import type { SubscriptionInterface } from '../interfaces';
import type { RequiredBy } from '../types';

export type CreateSubscriptionDTO = RequiredBy<
  Partial<
    Pick<
      SubscriptionInterface,
      | 'plan'
      | 'customer'
      | 'card'
      | 'description'
      | 'payment_method'
      | 'due_date'
      | 'currency'
      | 'metadata'
    >
  >,
  'plan' | 'customer' | 'payment_method' | 'due_date' | 'currency'
>;

export type UpdateSubscriptionDTO = Partial<
  Pick<
    SubscriptionInterface,
    | 'plan'
    | 'customer'
    | 'card'
    | 'description'
    | 'payment_method'
    | 'due_date'
    | 'currency'
    | 'metadata'
  >
>;
