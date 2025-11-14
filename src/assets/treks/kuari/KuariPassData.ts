import kuariRanges from './kuari-ranges.png';
import groupPrevious from './group-previous.png';
import kuariTaliLake from './Kuari-Pass-Trek-Tali-Lake.webp';
import kuariScenery from './kuari-scenery.avif';
import kuariPassBrochure from './Kuari Pass Trek Brochure (Oh Bhaisahab Experience).pdf';

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

export type KuariPassData = {
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
}

export const kuariPassData: KuariPassData = {
  title: 'Kuari Pass Trek - Winter Wonderland',
  date: 'December 25-30, 2025',
  duration: '6 Days / 5 Nights',
  difficulty: 'Moderate',
  location: 'Garhwal Himalayas, Uttarakhand',
  images: [
    kuariRanges,
    kuariTaliLake,
    kuariScenery,
    groupPrevious,
  ],
  brochure: kuariPassBrochure,
  description: 'Experience the magic of winter in the Garhwal Himalayas with our signature Kuari Pass trek. This easy-moderate level trek offers breathtaking views of snow-capped peaks including Nanda Devi, Trishul, and Dronagiri.',
  highlights: [
    'Breathtaking views of Nanda Devi (7,816m) and other Himalayan peaks',
    'Walk through pristine snow-covered trails',
    'Stay in traditional mountain villages',
    'Witness stunning sunrises and sunsets',
    'Experience local Garhwali culture',
    'Professional mountain guides and safety equipment',
    'Signature OBS Experiences including Happiness Sharing, Meditation & Journaling',
    'Welcome & Farewell Gifts, Gifts for Winners'
  ],
  itinerary: [
    {
      day: 'Day 1',
      title: 'Dehradun to Joshimath',
      description: 'Drive from Dehradun to Joshimath (280km, 8-9hr drive)',
      type: 'Travel'
    },
    {
      day: 'Day 2',
      title: 'Joshimath to Gulling',
      description: 'Drive from Joshimath to Tugasi (16km), then trek from Tugasi to Gulling (3km)',
      type: 'Travel + Trek'
    },
    {
      day: 'Day 3',
      title: 'Gulling to Khullara',
      description: 'Trek from Gulling to Khullara Campsite (3km)',
      type: 'Trek'
    },
    {
      day: 'Day 4',
      title: 'Khullara to Kuari Pass & back',
      description: 'Summit Day - Trek to Kuari Pass and return (10km round trek)',
      type: 'Trek'
    },
    {
      day: 'Day 5',
      title: 'Khullara to Joshimath',
      description: 'Trek from Khullara to Tugasi (6km), then drive from Tugasi to Joshimath (16km)',
      type: 'Travel + Trek'
    },
    {
      day: 'Day 6',
      title: 'Joshimath to Dehradun',
      description: 'Drive from Joshimath to Dehradun (280km, 8-9hr drive)',
      type: 'Travel'
    }
  ],
  inclusions: [
    'Stay for 5 Nights',
    'Entry/Permit Fees',
    'Local Guide Fee',
    'All meals from dinner on Day 1 to breakfast on Day 6',
    'Transportation from Dehradun to Dehradun (if you opt for this)',
    'Signature OBS (Oh-Bhaisahab) Experiences',
    'Welcome & Farewell Gifts, Gifts for Winners',
    'Memories for a lifetime ;)'
  ],
  exclusions: [
    'Backpack Offloading (if you opt for this)',
    'Any costs arising due to unforeseen circumstances like landslides, road blocks, etc.',
    'Anything not mentioned under Trip Inclusions',
    'Any kind of personal expenses like tips, laundry, etc.'
  ],
  pricing: {
    trekFee: 10499,
    transportationFee: 2500,
    totalCostWithTransport: 12999,
    totalCostWithoutTransport: 10499,
    registrationFee: 2999,
    remainingAmountWithTransport: 10000,
    remainingAmountWithoutTransport: 7500,
    paymentDeadline: '25 November'
  },
  paymentLinks: {
    fullPaymentWithTransport: 'https://u.payu.in/PAYUMN/qIXRTQNNs2yQ',
    fullPaymentWithoutTransport: 'https://u.payu.in/PAYUMN/tIrbdycDQi95',
    registrationOnly: 'https://u.payu.in/PAYUMN/5rIiDpvjZirh',
    remainingDuesWithTransport: 'https://u.payu.in/PAYUMN/5IKb6za0TlHv',
    remainingDuesWithoutTransport: 'https://u.payu.in/PAYUMN/XJE7uVaRmAKN'
  },
  cancellationPolicy: [
    {
      period: 'Before 25 November',
      fee: '₹2,999',
      refund: 'Remaining amount'
    },
    {
      period: '26 November - 14 December',
      fee: '30% of total fee',
      refund: '70%'
    },
    {
      period: '15 December - 22 December',
      fee: '50% of total fee',
      refund: '50%'
    },
    {
      period: 'On or after 23 December',
      fee: '100%',
      refund: 'Non-refundable'
    }
  ]
};

