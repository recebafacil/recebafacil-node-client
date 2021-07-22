interface TransactionRoutesInterface {
  getAll: () => string;
  getById: (transaction_id: string) => string;
  create: () => string;
  refund: (transaction_id: string) => string;
  capture: (transaction_id: string) => string;
}

class TransactionRoutes implements TransactionRoutesInterface {
  getAll(): string {
    return '/transactions';
  }

  getById(transaction_id: string): string {
    return `/transactions/${transaction_id}`;
  }

  create(): string {
    return '/transactions';
  }

  refund(transaction_id: string): string {
    return `/transactions/${transaction_id}/void`;
  }

  capture(transaction_id: string): string {
    return `/transactions/${transaction_id}/capture`;
  }
}

export default new TransactionRoutes();
