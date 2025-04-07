export interface Buyer {
  id: string;
  resource: 'buyer';
  providerId: string;
  sellerId: string;
  name: string;
  email: string | null;
  documentNumber: string;
  phoneNumber: string | null;
  birthdate: string | null;
  street: string | null;
  houseNumber: string | null;
  postalCode: string | null;
  neighborhood: string | null;
  cityId: string | null;
  city: string | null;
  stateId: string | null;
  stateInitials: string | null;
  state: string | null;
  countryCode: string | null;
  createdAt: string;
  updatedAt: string;
}
