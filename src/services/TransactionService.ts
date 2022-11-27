import api from '../client-http';
import type { TransactionDTO } from '../dto/TransactionDTO';
import type {
  PaymentMethodType,
  TransactionInterface,
  ResourceListInterface,
} from '../interfaces';

import TransactionRoutes from '../routes/TransactionRoutes';

interface TransactionServiceInterface {
  getAll: () => Promise<
    ResourceListInterface<TransactionInterface<PaymentMethodType>>
  >;
  getById: (
    transaction_id: string
  ) => Promise<TransactionInterface<PaymentMethodType>>;
  create: (
    data: TransactionDTO
  ) => Promise<TransactionInterface<PaymentMethodType>>;
  refund: (
    transaction_id: string
  ) => Promise<TransactionInterface<PaymentMethodType>>;
  capture: (
    transaction_id: string
  ) => Promise<TransactionInterface<PaymentMethodType>>;
}

export default class TransactionService implements TransactionServiceInterface {
  async getAll(): Promise<
    ResourceListInterface<TransactionInterface<PaymentMethodType>>
  > {
    const URN = TransactionRoutes.getAll();

    const response = await api.get<
      ResourceListInterface<TransactionInterface<PaymentMethodType>>
    >(URN);

    return response.data;
  }

  async getById(
    transaction_id: string
  ): Promise<TransactionInterface<PaymentMethodType>> {
    const URN = TransactionRoutes.getById(transaction_id);

    const response = await api.get<TransactionInterface<PaymentMethodType>>(
      URN
    );

    return response.data;
  }

  async create(
    data: TransactionDTO,
    options: Record<string, unknown> = {}
  ): Promise<TransactionInterface<PaymentMethodType>> {
    const URN = TransactionRoutes.create();

    const response = await api.post<TransactionInterface<PaymentMethodType>>(
      URN,
      data,
      options
    );

    return response.data;
  }

  async refund(
    transaction_id: string
  ): Promise<TransactionInterface<PaymentMethodType>> {
    const URN = TransactionRoutes.refund(transaction_id);

    const response = await api.post<TransactionInterface<PaymentMethodType>>(
      URN
    );

    return response.data;
  }

  async capture(
    transaction_id: string
  ): Promise<TransactionInterface<PaymentMethodType>> {
    const URN = TransactionRoutes.capture(transaction_id);

    const response = await api.post<TransactionInterface<PaymentMethodType>>(
      URN
    );

    return response.data;
  }
}
