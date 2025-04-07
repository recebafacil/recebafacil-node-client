export interface BuyerInterface {
  id: string;
  resource: 'buyer';
  name: string;
  document_number: string;
  email: string | null;
  email_secondary: string | null;
  phone_number: string | null;
  birthdate: string | null;
  obs: string | null;
  street: string | null;
  house_number: number | null;
  postal_code: string | null;
  neighborhood: string | null;
  city: string | null;
  state_initials: string | null;
  state: string | null;
  country_code: string | null;
  created_at: string;
  updated_at: string;
}
