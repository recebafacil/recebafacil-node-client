interface BuyerCardsRoutesInterface {
  getAll: (buyer_id: string) => string;
  setDefaultDebit: (buyer_id: string, card_id: string) => string;
}

class BuyerCardsRoutes implements BuyerCardsRoutesInterface {
  getAll(buyer_id: string): string {
    return `/buyers/${buyer_id}/cards`;
  }

  setDefaultDebit(buyer_id: string, card_id: string): string {
    return `/buyers/${buyer_id}/cards/${card_id}/default`;
  }
}

export default new BuyerCardsRoutes();
