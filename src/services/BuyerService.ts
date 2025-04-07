import type { CreateBuyerDTO, UpdateBuyerDTO } from '@/dto/BuyerDTO';
import type { BuyerInterface } from '@/interfaces/buyer-interface';
import type { ResourceList } from '@/interfaces/resource-list';
import type { Response } from '@/interfaces/response';

import api from '../client-http';
import BuyerRoutes from '../routes/BuyerRoutes';
import BuyerCardsService from './BuyerCardsService';

interface BuyerServiceInterface {
  getAll: () => Promise<ResourceList<BuyerInterface>>;
  getById: (buyer_id: string) => Promise<BuyerInterface>;
  create: (data: CreateBuyerDTO) => Promise<BuyerInterface>;
  update: (buyer_id: string, data: UpdateBuyerDTO) => Promise<BuyerInterface>;
  delete: (buyer_id: string) => Promise<Response>;
}

export default class BuyerService implements BuyerServiceInterface {
  public cards: BuyerCardsService;

  constructor() {
    this.cards = new BuyerCardsService();
  }

  async getAll(): Promise<ResourceList<BuyerInterface>> {
    const URN = BuyerRoutes.getAll();

    const response = await api.get<ResourceList<BuyerInterface>>(URN);

    return response.data;
  }

  async getById(buyer_id: string): Promise<BuyerInterface> {
    const URN = BuyerRoutes.getById(buyer_id);

    const response = await api.get<BuyerInterface>(URN);

    return response.data;
  }

  async create(data: CreateBuyerDTO): Promise<BuyerInterface> {
    const URN = BuyerRoutes.create();

    const response = await api.post<BuyerInterface>(URN, data);

    return response.data;
  }

  async update(
    buyer_id: string,
    data: UpdateBuyerDTO,
  ): Promise<BuyerInterface> {
    const URN = BuyerRoutes.update(buyer_id);

    const response = await api.put<BuyerInterface>(URN, data);

    return response.data;
  }

  async delete(buyer_id: string): Promise<Response> {
    const URN = BuyerRoutes.delete(buyer_id);

    const response = await api.delete(URN);

    return response.data;
  }
}
