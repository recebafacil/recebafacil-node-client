interface CardRoutesInterface {
  getById: (card_id: string) => string;
  create: () => string;
  generateToken: () => string;
  delete: (card_id: string) => string;
}

class CardRoutes implements CardRoutesInterface {
  getById(card_id: string): string {
    return `/cards/${card_id}`;
  }

  create(): string {
    return '/cards';
  }

  generateToken(): string {
    return '/cards/tokens';
  }

  delete(card_id: string): string {
    return `/cards/${card_id}`;
  }
}

export default new CardRoutes();
