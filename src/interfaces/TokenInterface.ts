import type { CardInterface } from './CardInterface';

export interface TokenInterface {
  id: string;
  resource: 'token';
  used: boolean;
  type: 'card';
  card: CardInterface;
  created_at: string;
  updated_at: string;
}
