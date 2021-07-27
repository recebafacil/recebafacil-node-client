interface SubscriptionRoutesInterface {
  getAll: () => string;
  getById: (subscription_id: string) => string;
  create: () => string;
  suspended: (subscription_id: string) => string;
  reactivate: (subscription_id: string) => string;
  update: (subscription_id: string) => string;
  delete: (subscription_id: string) => string;
}

class SubscriptionRoutes implements SubscriptionRoutesInterface {
  getAll(): string {
    return '/subscriptions';
  }

  getById(subscription_id: string): string {
    return `/subscriptions/${subscription_id}`;
  }

  create(): string {
    return '/subscriptions';
  }

  suspended(subscription_id: string): string {
    return `/subscriptions/${subscription_id}/suspend`;
  }

  reactivate(subscription_id: string): string {
    return `/subscriptions/${subscription_id}/reactivate`;
  }

  update(subscription_id: string): string {
    return `/subscriptions/${subscription_id}`;
  }

  delete(subscription_id: string): string {
    return `/subscriptions/${subscription_id}`;
  }
}

export default new SubscriptionRoutes();
