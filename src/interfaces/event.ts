import type { EventType } from './types';

export interface Event<Payload> {
  id: string;
  resource: 'event';
  marketplaceId: string;
  type: EventType;
  payload: Payload;
  name: string | null;
  createdAt: string;
  updatedAt: string;
}
