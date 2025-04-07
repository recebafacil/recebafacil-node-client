import type { CreatePlanDTO, UpdatePlanDTO } from '@/dto/PlanDTO';
import type { PlanInterface } from '@/interfaces/plan-interface';
import type { ResourceList } from '@/interfaces/resource-list';
import type { Response } from '@/interfaces/response';

import api from '../client-http';
import PlanRoutes from '../routes/PlanRoutes';

interface PlanServiceInterface {
  getAll: () => Promise<ResourceList<PlanInterface>>;
  getById: (plan_id: string) => Promise<PlanInterface>;
  create: (data: CreatePlanDTO) => Promise<PlanInterface>;
  update: (plan_id: string, data: UpdatePlanDTO) => Promise<PlanInterface>;
  delete: (plan_id: string) => Promise<Response>;
}

export default class PlanService implements PlanServiceInterface {
  async getAll(): Promise<ResourceList<PlanInterface>> {
    const URN = PlanRoutes.getAll();

    const response = await api.get<ResourceList<PlanInterface>>(URN);

    return response.data;
  }

  async getById(plan_id: string): Promise<PlanInterface> {
    const URN = PlanRoutes.getById(plan_id);

    const response = await api.get<PlanInterface>(URN);

    return response.data;
  }

  async create(data: CreatePlanDTO): Promise<PlanInterface> {
    const URN = PlanRoutes.create();

    const response = await api.post<PlanInterface>(URN, data);

    return response.data;
  }

  async update(plan_id: string, data: UpdatePlanDTO): Promise<PlanInterface> {
    const URN = PlanRoutes.update(plan_id);

    const response = await api.put<PlanInterface>(URN, data);

    return response.data;
  }

  async delete(plan_id: string): Promise<Response> {
    const URN = PlanRoutes.delete(plan_id);

    const response = await api.delete(URN);

    return response.data;
  }
}
