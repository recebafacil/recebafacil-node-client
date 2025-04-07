enum EStatus {
  ACTIVE = 'active',
  DISABLED = 'disabled',
}

export type ProductStatus = `${EStatus}`;

export interface Product<Metadata = object> {
  id: string;
  resource: 'product';
  marketplaceId: string;
  sellerId: string;
  name: string;
  description: string | null;
  image: string | null;
  status: ProductStatus;
  metadata: Metadata | null;
  createdAt: string;
  updatedAt: string;
}
