import { AxiosResponse } from 'axios';
import api from '../client-http';
import { InvoiceInterface } from '../interfaces/InvoiceInterface';
import { RecebaResponseInterface } from '../interfaces/ResponseInterface';
import { CreateInvoiceDTO, UpdateInvoiceDTO } from '../dto/InvoiceDTO';
import InvoiceRouter from '../routes/invoices';

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
    const URN = InvoiceRouter.getAll();

    return api.get<InvoiceInterface[]>(URN);
  }

  getById(invoice_id: string): Promise<AxiosResponse<InvoiceInterface>> {
    const URN = InvoiceRouter.getById(invoice_id);

    return api.get<InvoiceInterface>(URN);
  }

  create(data: CreateInvoiceDTO): Promise<AxiosResponse<InvoiceInterface>> {
    const URN = InvoiceRouter.create();

    return api.post<InvoiceInterface>(URN, data);
  }

  approve(invoice_id: string): Promise<AxiosResponse<InvoiceInterface>> {
    const URN = InvoiceRouter.approve(invoice_id);

    return api.post<InvoiceInterface>(URN);
  }

  void(invoice_id: string): Promise<AxiosResponse<InvoiceInterface>> {
    const URN = InvoiceRouter.void(invoice_id);

    return api.post<InvoiceInterface>(URN);
  }

  update(
    invoice_id: string,
    data: UpdateInvoiceDTO
  ): Promise<AxiosResponse<InvoiceInterface>> {
    const URN = InvoiceRouter.update(invoice_id);

    return api.put<InvoiceInterface>(URN, data);
  }

  delete(invoice_id: string): Promise<AxiosResponse<RecebaResponseInterface>> {
    const URN = InvoiceRouter.delete(invoice_id);

    return api.delete(URN);
  }
}
