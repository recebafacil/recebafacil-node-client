import { AxiosResponse } from 'axios';
import api from '../client-http';
import { InvoiceInterface } from '../interfaces/InvoiceInterface';
import { RecebaResponseInterface } from '../interfaces/ResponseInterface';
import { CreateInvoiceDTO, UpdateInvoiceDTO } from '../dto/InvoiceDTO';
import InvoiceRoutes from '../routes/InvoiceRoutes';

interface InvoiceServiceInterface {
  getAll: () => Promise<AxiosResponse<InvoiceInterface[]>>;
  getById: (invoice_id: string) => Promise<AxiosResponse<InvoiceInterface>>;
  create: (data: CreateInvoiceDTO) => Promise<AxiosResponse<InvoiceInterface>>;
  approve: (invoice_id: string) => Promise<AxiosResponse<InvoiceInterface>>;
  void: (invoice_id: string) => Promise<AxiosResponse<InvoiceInterface>>;
  update: (
    invoice_id: string,
    data: UpdateInvoiceDTO
  ) => Promise<AxiosResponse<InvoiceInterface>>;
  delete: (
    invoice_id: string
  ) => Promise<AxiosResponse<RecebaResponseInterface>>;
}

export default class InvoiceService implements InvoiceServiceInterface {
  getAll(): Promise<AxiosResponse<InvoiceInterface[]>> {
    const URN = InvoiceRoutes.getAll();

    return api.get<InvoiceInterface[]>(URN);
  }

  getById(invoice_id: string): Promise<AxiosResponse<InvoiceInterface>> {
    const URN = InvoiceRoutes.getById(invoice_id);

    return api.get<InvoiceInterface>(URN);
  }

  create(data: CreateInvoiceDTO): Promise<AxiosResponse<InvoiceInterface>> {
    const URN = InvoiceRoutes.create();

    return api.post<InvoiceInterface>(URN, data);
  }

  approve(invoice_id: string): Promise<AxiosResponse<InvoiceInterface>> {
    const URN = InvoiceRoutes.approve(invoice_id);

    return api.post<InvoiceInterface>(URN);
  }

  void(invoice_id: string): Promise<AxiosResponse<InvoiceInterface>> {
    const URN = InvoiceRoutes.void(invoice_id);

    return api.post<InvoiceInterface>(URN);
  }

  update(
    invoice_id: string,
    data: UpdateInvoiceDTO
  ): Promise<AxiosResponse<InvoiceInterface>> {
    const URN = InvoiceRoutes.update(invoice_id);

    return api.put<InvoiceInterface>(URN, data);
  }

  delete(invoice_id: string): Promise<AxiosResponse<RecebaResponseInterface>> {
    const URN = InvoiceRoutes.delete(invoice_id);

    return api.delete(URN);
  }
}
