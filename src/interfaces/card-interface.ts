export interface CardInterface {
  id: string;
  resource: 'card';
  customer: string;
  is_default: boolean;
  description: string | null;
  first4_digits: string;
  last4_digits: string;
  card_brand: string;
  expiration_month: string;
  expiration_year: string;
  holder_name: string;
  created_at: string;
  updated_at: string;
}
