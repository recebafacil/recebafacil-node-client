import api from '../client-http';
import {
  CardInterface,
  RecebaResponseInterface,
  TokenInterface,
} from '../interfaces';
import { CreateCardDTO, GenerateTokenCardDTO } from '../dto/CardDTO';
import CardRoutes from '../routes/CardRoutes';

interface CardServiceInterface {
  getById: (buyer_id: string) => Promise<CardInterface>;
  create: (data: CreateCardDTO) => Promise<CardInterface>;
  generateToken: (data: GenerateTokenCardDTO) => Promise<TokenInterface>;
  delete: (buyer_id: string) => Promise<RecebaResponseInterface>;
}

export default class CardService implements CardServiceInterface {
  async getById(buyer_id: string): Promise<CardInterface> {
    const URN = CardRoutes.getById(buyer_id);

    const response = await api.get<CardInterface>(URN);

    return response.data;
  }

  async create(data: CreateCardDTO): Promise<CardInterface> {
    const URN = CardRoutes.create();

    const response = await api.post<CardInterface>(URN, data);

    return response.data;
  }

  async generateToken(data: GenerateTokenCardDTO): Promise<TokenInterface> {
    const URN = CardRoutes.generateToken();

    const response = await api.post<TokenInterface>(URN, data);

    return response.data;
  }

  async delete(buyer_id: string): Promise<RecebaResponseInterface> {
    const URN = CardRoutes.delete(buyer_id);

    const response = await api.delete(URN);

    return response.data;
  }
}
