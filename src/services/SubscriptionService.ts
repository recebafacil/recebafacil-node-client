import { AxiosResponse } from 'axios';
import api from '../client-http';
import { SubscriptionInterface } from '../interfaces/SubscriptionInterface';
import { RecebaResponseInterface } from '../interfaces/ResponseInterface';
import {
  CreateSubscriptionDTO,
  UpdateSubscriptionDTO,
} from '../dto/SubscriptionDTO';
import SubscriptionRoutes from '../routes/SubscriptionRoutes';

interface SubscriptionServiceInterface {
  getAll: () => Promise<AxiosResponse<SubscriptionInterface[]>>;
  getById: (
    subscription_id: string
  ) => Promise<AxiosResponse<SubscriptionInterface>>;
  create: (
    data: CreateSubscriptionDTO
  ) => Promise<AxiosResponse<SubscriptionInterface>>;
  suspended: (
    subscription_id: string
  ) => Promise<AxiosResponse<SubscriptionInterface>>;
  reactivate: (
    subscription_id: string
  ) => Promise<AxiosResponse<SubscriptionInterface>>;
  update: (
    subscription_id: string,
    data: UpdateSubscriptionDTO
  ) => Promise<AxiosResponse<SubscriptionInterface>>;
  delete: (
    subscription_id: string
  ) => Promise<AxiosResponse<RecebaResponseInterface>>;
}

export default class SubscriptionService
  implements SubscriptionServiceInterface {
  getAll(): Promise<AxiosResponse<SubscriptionInterface[]>> {
    const URN = SubscriptionRoutes.getAll();

    return api.get<SubscriptionInterface[]>(URN);
  }

  getById(
    subscription_id: string
  ): Promise<AxiosResponse<SubscriptionInterface>> {
    const URN = SubscriptionRoutes.getById(subscription_id);

    return api.get<SubscriptionInterface>(URN);
  }

  create(
    data: CreateSubscriptionDTO
  ): Promise<AxiosResponse<SubscriptionInterface>> {
    const URN = SubscriptionRoutes.create();

    return api.post<SubscriptionInterface>(URN, data);
  }

  suspended(
    subscription_id: string
  ): Promise<AxiosResponse<SubscriptionInterface>> {
    const URN = SubscriptionRoutes.suspended(subscription_id);

    return api.post<SubscriptionInterface>(URN);
  }

  reactivate(
    subscription_id: string
  ): Promise<AxiosResponse<SubscriptionInterface>> {
    const URN = SubscriptionRoutes.reactivate(subscription_id);

    return api.post<SubscriptionInterface>(URN);
  }

  update(
    subscription_id: string,
    data: UpdateSubscriptionDTO
  ): Promise<AxiosResponse<SubscriptionInterface>> {
    const URN = SubscriptionRoutes.update(subscription_id);

    return api.put<SubscriptionInterface>(URN, data);
  }

  delete(
    subscription_id: string
  ): Promise<AxiosResponse<RecebaResponseInterface>> {
    const URN = SubscriptionRoutes.delete(subscription_id);

    return api.delete(URN);
  }
}
