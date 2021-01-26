import { EventType } from './types';

export interface Event<Payload> {
  id: string;
  resource: 'event';
  type: EventType;
  payload: Payload;
  name: string | null;
  created_at: Date;
  updated_at: Date;
}
