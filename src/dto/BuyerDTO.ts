import { BuyerInterface } from '../interfaces';
import { RequiredBy } from '../types';

export type CreateBuyerDTO = RequiredBy<
  Partial<
    Pick<
      BuyerInterface,
      | 'name'
      | 'document_number'
      | 'email'
      | 'email_secondary'
      | 'phone_number'
      | 'birthdate'
      | 'obs'
      | 'street'
      | 'house_number'
      | 'postal_code'
      | 'neighborhood'
      | 'city'
      | 'state_initials'
      | 'state'
      | 'country_code'
    >
  >,
  'name' | 'document_number' | 'email'
>;

export type UpdateBuyerDTO = Partial<
  Pick<
    BuyerInterface,
    | 'name'
    | 'email'
    | 'email_secondary'
    | 'phone_number'
    | 'birthdate'
    | 'obs'
    | 'street'
    | 'house_number'
    | 'postal_code'
    | 'neighborhood'
    | 'city'
    | 'state_initials'
    | 'state'
    | 'country_code'
  >
>;
