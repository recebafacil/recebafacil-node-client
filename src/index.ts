import api from './client-http';
import authenticate from './authentication';
import InvoiceService from './services/InvoiceService';
import SubscriptionService from './services/SubscriptionService';
import TransactionService from './services/TransactionService';
import type { RecebaFacilClientDTO } from './dto/RecebaFacilClientDTO';
import PlanService from './services/PlanService';
import BuyerService from './services/BuyerService';
import CardService from './services/CardService';

export * from './interfaces';

export default class RecebaFacilClient {
  public invoices: InvoiceService;

  public subscriptions: SubscriptionService;

  public transactions: TransactionService;

  public plans: PlanService;

  public buyers: BuyerService;

  public cards: CardService;

  constructor({
    marketplace_id,
    api_key,
    config = {
      environment: 'production',
    },
  }: RecebaFacilClientDTO) {
    const authHeader = authenticate(api_key);
    api.interceptors.request.use(request => {
      if (config?.environment === 'development')
        request.baseURL = 'https://test.api.recebafacil.com';
      else request.baseURL = 'https://api.recebafacil.com';

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
    this.subscriptions = new SubscriptionService();
    this.transactions = new TransactionService();
    this.plans = new PlanService();
    this.buyers = new BuyerService();
    this.cards = new CardService();
  }
}
