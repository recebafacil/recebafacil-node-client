import api from './client-http';
import authenticate from './authentication';
import InvoiceService from './services/InvoiceService';
import { RecebaFacilClientDTO } from './dto/RecebaFacilClientDTO';

// eslint-disable-next-line import/prefer-default-export
export = class RecebaFacilClient {
  public invoices: InvoiceService;

  constructor({ marketplace_id, api_key }: RecebaFacilClientDTO) {
    const authHeader = authenticate(api_key);
    api.interceptors.request.use(request => {
      request.baseURL += `/marketplaces/${marketplace_id}`;
      request.auth = authHeader;

      if (
        request.method &&
        (request.method === 'POST' || request.method === 'PUT')
      ) {
        request.headers = {
          'Content-Type': 'application/json',
        };
      }

      return request;
    });

    this.invoices = new InvoiceService();
  }
};
