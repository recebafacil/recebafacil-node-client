import type { CreateCardDTO, GenerateTokenCardDTO } from '@/dto/CardDTO';
import type { CardInterface } from '@/interfaces/card-interface';
import type { Response } from '@/interfaces/response';
import type { TokenInterface } from '@/interfaces/token-interface';

import api from '../client-http';
import CardRoutes from '../routes/CardRoutes';

interface CardServiceInterface {
  getById: (card_id: string) => Promise<CardInterface>;
  create: (data: CreateCardDTO) => Promise<CardInterface>;
  generateToken: (data: GenerateTokenCardDTO) => Promise<TokenInterface>;
  delete: (card_id: string) => Promise<Response>;
}

export default class CardService implements CardServiceInterface {
  async getById(card_id: string): Promise<CardInterface> {
    const URN = CardRoutes.getById(card_id);

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

  async delete(card_id: string): Promise<Response> {
    const URN = CardRoutes.delete(card_id);

    const response = await api.delete(URN);

    return response.data;
  }
}
