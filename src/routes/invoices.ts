interface InvoiceRouterInterface {
  getAll: () => string;
  getById: (invoice_id: string) => string;
  create: () => string;
  approve: (invoice_id: string) => string;
  void: (invoice_id: string) => string;
  update: (invoice_id: string) => string;
  delete: (invoice_id: string) => string;
}

class InvoiceRoute implements InvoiceRouterInterface {
  getAll(): string {
    return '/invoices';
  }

  getById(invoice_id: string): string {
    return `/invoices/${invoice_id}`;
  }

  create(): string {
    return '/invoices';
  }

  approve(invoice_id: string): string {
    return `/invoices/${invoice_id}/approve`;
  }

  void(invoice_id: string): string {
    return `/invoices/${invoice_id}/void`;
  }

  update(invoice_id: string): string {
    return `/invoices/${invoice_id}`;
  }

  delete(invoice_id: string): string {
    return `/invoices/${invoice_id}`;
  }
}

export default new InvoiceRoute();
