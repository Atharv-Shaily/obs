export type PaymentLinks = {
  fullPaymentWithTransport: string;
  fullPaymentWithoutTransport: string;
  registrationOnly: string;
  remainingDuesWithTransport: string;
  remainingDuesWithoutTransport: string;
}

export type PricingDetails = {
  trekFee: number;
  transportationFee: number;
  totalCostWithTransport: number;
  totalCostWithoutTransport: number;
  registrationFee: number;
  remainingAmountWithTransport: number;
  remainingAmountWithoutTransport: number;
  paymentDeadline: string;
}

export type TrekData = {
  id: string;
  title: string;
  date: string;
  duration: string;
  difficulty: string;
  location: string;
  images: string[];
  brochure: string;
  description: string;
  highlights: string[];
  itinerary: Array<{
    day: string;
    title: string;
    description: string;
    type: string;
  }>;
  inclusions: string[];
  exclusions: string[];
  pricing: PricingDetails;
  paymentLinks: PaymentLinks;
  cancellationPolicy: Array<{
    period: string;
    fee: string;
    refund: string;
  }>;
  videoUrl?: string;
  transportationRoute?: string;
  registrationLink?: string; // For direct registration (non-modal booking)
}

