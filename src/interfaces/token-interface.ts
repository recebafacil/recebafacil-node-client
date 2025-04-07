import type { Card } from './card';

export interface TokenInterface {
  id: string;
  resource: 'token';
  used: boolean;
  type: 'card';
  card: Card;
  created_at: string;
  updated_at: string;
}
