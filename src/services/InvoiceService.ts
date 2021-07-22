import api from '../client-http';
import { InvoiceInterface, RecebaResponseInterface } from '../interfaces';
import { CreateInvoiceDTO, UpdateInvoiceDTO } from '../dto/InvoiceDTO';
import InvoiceRoutes from '../routes/InvoiceRoutes';
import { ResourceListInterface } from '../interfaces/ResourceListInterface';

interface InvoiceServiceInterface {
  getAll: () => Promise<ResourceListInterface<InvoiceInterface>>;
  getById: (invoice_id: string) => Promise<InvoiceInterface>;
  create: (data: CreateInvoiceDTO) => Promise<InvoiceInterface>;
  approve: (invoice_id: string) => Promise<InvoiceInterface>;
  void: (invoice_id: string) => Promise<InvoiceInterface>;
  update: (
    invoice_id: string,
    data: UpdateInvoiceDTO
  ) => Promise<InvoiceInterface>;
  delete: (invoice_id: string) => Promise<RecebaResponseInterface>;
}

export default class InvoiceService implements InvoiceServiceInterface {
  async getAll(): Promise<ResourceListInterface<InvoiceInterface>> {
    const URN = InvoiceRoutes.getAll();

    const response = await api.get<ResourceListInterface<InvoiceInterface>>(
      URN
    );

    return response.data;
  }

  async getById(invoice_id: string): Promise<InvoiceInterface> {
    const URN = InvoiceRoutes.getById(invoice_id);

    const response = await api.get<InvoiceInterface>(URN);

    return response.data;
  }

  async create(data: CreateInvoiceDTO): Promise<InvoiceInterface> {
    const URN = InvoiceRoutes.create();

    const response = await api.post<InvoiceInterface>(URN, data);

    return response.data;
  }

  async approve(invoice_id: string): Promise<InvoiceInterface> {
    const URN = InvoiceRoutes.approve(invoice_id);

    const response = await api.post<InvoiceInterface>(URN);

    return response.data;
  }

  async void(invoice_id: string): Promise<InvoiceInterface> {
    const URN = InvoiceRoutes.void(invoice_id);

    const response = await api.post<InvoiceInterface>(URN);

    return response.data;
  }

  async update(
    invoice_id: string,
    data: UpdateInvoiceDTO
  ): Promise<InvoiceInterface> {
    const URN = InvoiceRoutes.update(invoice_id);

    const response = await api.put<InvoiceInterface>(URN, data);

    return response.data;
  }

  async delete(invoice_id: string): Promise<RecebaResponseInterface> {
    const URN = InvoiceRoutes.delete(invoice_id);

    const response = await api.delete(URN);

    return response.data;
  }
}
