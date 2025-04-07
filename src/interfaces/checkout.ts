enum ECheckoutPaymentTypesAccepted {
  credit = 'credit',
  boleto = 'boleto',
  pix = 'pix',
}

export type CheckoutPaymentTypesAccepted = `${ECheckoutPaymentTypesAccepted}`;

export interface CheckoutPaymentTypesConfig {
  credit: {
    customerPaysInterest: boolean;
    isRecoverSaleEnabled: boolean;
    recoverSaleAmount: number | null;
    discount: number;
    discountType: 'percentage' | 'fixed';
    isInstallmentsEnabled: boolean;
    defaultInstallments: number;
    minInstallments: number;
    maxInstallments: number;
  };
  pix: {
    discount: number;
    discountType: 'percentage' | 'fixed';
    isInstallmentsEnabled: boolean;
    defaultInstallments: number;
    minInstallments: number;
    maxInstallments: number;
  };
  boleto: {
    discount: number;
    discountType: 'percentage' | 'fixed';
    daysUntilExpiration: number;
    maxDaysToPay: number;
    bodyInstructions: string | null;
    lateFee: {
      mode: 'fixed' | 'percentage';
      amount: number;
      percentage: number;
      startDate: string | null;
    };
    interest: {
      mode: 'monthly-percentage' | 'daily-percentage' | 'daily-amount';
      amount: number;
      percentage: number;
      startDate: string | null;
    };
    discounts: {
      mode: 'fixed' | 'percentage';
      amount: number;
      percentage: number;
      limitDate: string;
    }[];
    withPix: boolean;
    pixAmount: number | null;
    isInstallmentsEnabled: boolean;
    defaultInstallments: number;
    minInstallments: number;
    maxInstallments: number;
  };
}

export interface CheckoutConfig {
  coupon: {
    isEnabled: boolean;
    isRequired: boolean;
  };
}

export interface CheckoutRedirectUrl {
  general: string | null;
  pix: string | null;
  boleto: string | null;
  credit: string | null;
}

export interface CheckoutIntegrations {
  googleAnalytics: {
    app: string | 'recebafacil-checkout';
    trackingId: string | null;
    secret: string | null;
    measurementId: string | null;
  };
  rdStation: {
    publicToken: string | null;
  };
  activeCampaign: {
    accountName: string | null;
    apiKey: string | null;
  };
  facebookPixel: {
    accessToken: string | null;
    pixelCode: string | null;
  };
}

export interface Checkout<Metadata = object> {
  id: string;
  marketplaceId: string;
  sellerId: string;
  name: string;
  isEnabled: boolean;
  paymentTypesAccepted: CheckoutPaymentTypesAccepted;
  paymentTypesConfig: CheckoutPaymentTypesConfig;
  config: CheckoutConfig;
  redirectUrl: CheckoutRedirectUrl;
  integrations: CheckoutIntegrations;
  metadata: Metadata | null;
  createdAt: string;
  updatedAt: string;
}
