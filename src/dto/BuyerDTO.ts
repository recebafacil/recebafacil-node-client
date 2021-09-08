import { BuyerInterface } from '../interfaces';

export type CreateBuyerDTO = Pick<
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
