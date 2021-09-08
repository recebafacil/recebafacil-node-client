import api from '../client-http';
import { BuyerInterface, RecebaResponseInterface } from '../interfaces';
import { CreateBuyerDTO, UpdateBuyerDTO } from '../dto/BuyerDTO';
import BuyerRoutes from '../routes/BuyerRoutes';
import { ResourceListInterface } from '../interfaces/ResourceListInterface';

interface BuyerServiceInterface {
  getAll: () => Promise<ResourceListInterface<BuyerInterface>>;
  getById: (buyer_id: string) => Promise<BuyerInterface>;
  create: (data: CreateBuyerDTO) => Promise<BuyerInterface>;
  update: (buyer_id: string, data: UpdateBuyerDTO) => Promise<BuyerInterface>;
  delete: (buyer_id: string) => Promise<RecebaResponseInterface>;
}

export default class BuyerService implements BuyerServiceInterface {
  async getAll(): Promise<ResourceListInterface<BuyerInterface>> {
    const URN = BuyerRoutes.getAll();

    const response = await api.get<ResourceListInterface<BuyerInterface>>(URN);

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
    data: UpdateBuyerDTO
  ): Promise<BuyerInterface> {
    const URN = BuyerRoutes.update(buyer_id);

    const response = await api.put<BuyerInterface>(URN, data);

    return response.data;
  }

  async delete(buyer_id: string): Promise<RecebaResponseInterface> {
    const URN = BuyerRoutes.delete(buyer_id);

    const response = await api.delete(URN);

    return response.data;
  }
}
