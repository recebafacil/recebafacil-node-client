import type { CardInterface } from '@/interfaces/card-interface';
import type { ResourceList } from '@/interfaces/resource-list';

import api from '../client-http';
import BuyerCardsRoutes from '../routes/BuyerCardsRoutes';

interface BuyerCardsServiceInterface {
  getAll: (buyer_id: string) => Promise<ResourceList<CardInterface>>;
  setDefaultDebit: (
    buyer_id: string,
    card_id: string,
  ) => Promise<CardInterface>;
}

export default class BuyerCardsService implements BuyerCardsServiceInterface {
  async getAll(buyer_id: string): Promise<ResourceList<CardInterface>> {
    const URN = BuyerCardsRoutes.getAll(buyer_id);

    const response = await api.get<ResourceList<CardInterface>>(URN);

    return response.data;
  }

  async setDefaultDebit(
    buyer_id: string,
    card_id: string,
  ): Promise<CardInterface> {
    const URN = BuyerCardsRoutes.setDefaultDebit(buyer_id, card_id);

    const response = await api.post<CardInterface>(URN);

    return response.data;
  }
}
