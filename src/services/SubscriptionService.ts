import type {
  CreateSubscriptionDTO,
  UpdateSubscriptionDTO,
} from '@/dto/SubscriptionDTO';
import type { ResourceList } from '@/interfaces/resource-list';
import type { Response } from '@/interfaces/response';
import type { SubscriptionInterface } from '@/interfaces/subscription-interface';

import api from '../client-http';
import SubscriptionRoutes from '../routes/SubscriptionRoutes';

interface SubscriptionServiceInterface {
  getAll: () => Promise<ResourceList<SubscriptionInterface>>;
  getById: (subscription_id: string) => Promise<SubscriptionInterface>;
  create: (data: CreateSubscriptionDTO) => Promise<SubscriptionInterface>;
  suspended: (subscription_id: string) => Promise<SubscriptionInterface>;
  reactivate: (subscription_id: string) => Promise<SubscriptionInterface>;
  update: (
    subscription_id: string,
    data: UpdateSubscriptionDTO,
  ) => Promise<SubscriptionInterface>;
  delete: (subscription_id: string) => Promise<Response>;
}

export default class SubscriptionService
  implements SubscriptionServiceInterface
{
  async getAll(): Promise<ResourceList<SubscriptionInterface>> {
    const URN = SubscriptionRoutes.getAll();

    const response = await api.get<ResourceList<SubscriptionInterface>>(URN);

    return response.data;
  }

  async getById(subscription_id: string): Promise<SubscriptionInterface> {
    const URN = SubscriptionRoutes.getById(subscription_id);

    const response = await api.get<SubscriptionInterface>(URN);

    return response.data;
  }

  async create(data: CreateSubscriptionDTO): Promise<SubscriptionInterface> {
    const URN = SubscriptionRoutes.create();

    const response = await api.post<SubscriptionInterface>(URN, data);

    return response.data;
  }

  async suspended(subscription_id: string): Promise<SubscriptionInterface> {
    const URN = SubscriptionRoutes.suspended(subscription_id);

    const response = await api.post<SubscriptionInterface>(URN);

    return response.data;
  }

  async reactivate(subscription_id: string): Promise<SubscriptionInterface> {
    const URN = SubscriptionRoutes.reactivate(subscription_id);

    const response = await api.post<SubscriptionInterface>(URN);

    return response.data;
  }

  async update(
    subscription_id: string,
    data: UpdateSubscriptionDTO,
  ): Promise<SubscriptionInterface> {
    const URN = SubscriptionRoutes.update(subscription_id);

    const response = await api.put<SubscriptionInterface>(URN, data);

    return response.data;
  }

  async delete(subscription_id: string): Promise<Response> {
    const URN = SubscriptionRoutes.delete(subscription_id);

    const response = await api.delete(URN);

    return response.data;
  }
}
