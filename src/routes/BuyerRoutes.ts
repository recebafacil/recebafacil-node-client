interface BuyerRoutesInterface {
  getAll: () => string;
  getById: (buyer_id: string) => string;
  create: () => string;
  update: (buyer_id: string) => string;
  delete: (buyer_id: string) => string;
}

class BuyerRoutes implements BuyerRoutesInterface {
  getAll(): string {
    return '/buyers';
  }

  getById(buyer_id: string): string {
    return `/buyers/${buyer_id}`;
  }

  create(): string {
    return '/buyers';
  }

  update(buyer_id: string): string {
    return `/buyers/${buyer_id}`;
  }

  delete(buyer_id: string): string {
    return `/buyers/${buyer_id}`;
  }
}

export default new BuyerRoutes();
