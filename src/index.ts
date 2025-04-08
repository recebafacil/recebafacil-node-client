import authenticate from './authentication';
import api from './client-http';
import type { RecebaFacilClientDTO } from './dto/RecebaFacilClientDTO';
import BuyerService from './services/BuyerService';
import CardService from './services/CardService';
import InvoiceService from './services/InvoiceService';
import PlanService from './services/PlanService';
import SubscriptionService from './services/SubscriptionService';
import TransactionService from './services/TransactionService';

export * from '@/interfaces/boleto';
export * from '@/interfaces/boleto-interface';
export * from '@/interfaces/buyer';
export * from '@/interfaces/buyer-interface';
export * from '@/interfaces/card';
export * from '@/interfaces/card-interface';
export * from '@/interfaces/event';
export * from '@/interfaces/invoice-interface';
export * from '@/interfaces/offer';
export * from '@/interfaces/pix';
export * from '@/interfaces/pix-interface';
export * from '@/interfaces/plan';
export * from '@/interfaces/plan-interface';
export * from '@/interfaces/product';
export * from '@/interfaces/resource-list';
export * from '@/interfaces/response';
export * from '@/interfaces/subscription';
export * from '@/interfaces/subscription-interface';
export * from '@/interfaces/token-interface';
export * from '@/interfaces/transaction';
export * from '@/interfaces/transaction-interface';
export * from '@/interfaces/types';

export class RecebaFacilClient {
  public invoices: InvoiceService;

  public subscriptions: SubscriptionService;

  public transactions: TransactionService;

  public plans: PlanService;

  public buyers: BuyerService;

  public cards: CardService;

  public constructor({
    marketplace_id,
    api_key,
    config = {
      environment: 'production',
    },
  }: RecebaFacilClientDTO) {
    const authHeader = authenticate(api_key);

    api.interceptors.request.use(request => {
      if (config?.environment === 'development') {
        request.baseURL = 'https://test.api.recebafacil.com';
      } else {
        request.baseURL = 'https://api.recebafacil.com';
      }

      request.baseURL += `/marketplaces/${marketplace_id}`;
      request.auth = authHeader;

      if (
        request.method &&
        (request.method === 'POST' || request.method === 'PUT')
      ) {
        request.headers.set('Content-Type', 'application/json');
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
