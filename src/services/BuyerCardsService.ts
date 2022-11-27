import type { ResourceListInterface, CardInterface } from '../interfaces';

import BuyerCardsRoutes from '../routes/BuyerCardsRoutes';
import api from '../client-http';

interface BuyerCardsServiceInterface {
  getAll: (buyer_id: string) => Promise<ResourceListInterface<CardInterface>>;
  setDefaultDebit: (
    buyer_id: string,
    card_id: string
  ) => Promise<CardInterface>;
}

export default class BuyerCardsService implements BuyerCardsServiceInterface {
  async getAll(
    buyer_id: string
  ): Promise<ResourceListInterface<CardInterface>> {
    const URN = BuyerCardsRoutes.getAll(buyer_id);

    const response = await api.get<ResourceListInterface<CardInterface>>(URN);

    return response.data;
  }

  async setDefaultDebit(
    buyer_id: string,
    card_id: string
  ): Promise<CardInterface> {
    const URN = BuyerCardsRoutes.setDefaultDebit(buyer_id, card_id);

    const response = await api.post<CardInterface>(URN);

    return response.data;
  }
}
