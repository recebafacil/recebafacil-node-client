export interface Card {
  id: string;
  resource: 'card';
  providerId: string;
  customerId: string | null;
  isDefault: boolean;
  description: string | null;
  first4Digits: string;
  last4Digits: string;
  cardBrand: string;
  expirationMonth: string;
  expirationYear: string;
  holderName: string;
  createdAt: string;
  updatedAt: string;
}
