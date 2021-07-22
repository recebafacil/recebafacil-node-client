interface PlanRoutesInterface {
  getAll: () => string;
  getById: (plan_id: string) => string;
  create: () => string;
  update: (plan_id: string) => string;
  delete: (plan_id: string) => string;
}

class PlanRoutes implements PlanRoutesInterface {
  getAll(): string {
    return '/plans';
  }

  getById(plan_id: string): string {
    return `/plans/${plan_id}`;
  }

  create(): string {
    return '/plans';
  }

  update(plan_id: string): string {
    return `/plans/${plan_id}`;
  }

  delete(plan_id: string): string {
    return `/plans/${plan_id}`;
  }
}

export default new PlanRoutes();
