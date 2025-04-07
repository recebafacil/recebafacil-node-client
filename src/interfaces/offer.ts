enum EStatus {
  ACTIVE = 'active',
  DISABLED = 'disabled',
}

export type OfferStatus = `${EStatus}`;

export interface Offer<Metadata = object> {
  id: string;
  resource: 'offer';
  marketplaceId: string;
  sellerId: string;
  productId: string;
  main: boolean;
  name: string;
  description: string | null;
  status: OfferStatus;
  amount: number;
  dateStart: string | null;
  dateEnd: string | null;
  automaticallyRecoverSales: boolean;
  metadata: Metadata | null;
  createdAt: string;
  updatedAt: string;
}
