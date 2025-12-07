import bhramtal1 from './bhrama_1.png';
import bhramtal2 from './bhrama_2.png';
import bhramtal3 from './bhrama_3.png';
import bhramtal4 from './bhrama_4.jpg';
import bhramtal5 from './bhrama_5.png';
import bhramtal6 from './bhrama_6.png';
import brahmatalBrochure from './brahmatal_brochure.pdf';
import type { TrekData } from '../TrekData';

export const brahmatalData: TrekData = {
  id: 'brahmatal',
  title: 'Brahmatal Trek - Oh-Bhaisahab Experience',
  date: 'March 26-31, 2026',
  duration: '6 Days / 5 Nights',
  difficulty: 'Easy-Moderate',
  location: 'Garhwal Himalayas, Uttarakhand',
  images: [
    bhramtal1,
    bhramtal2,
    bhramtal3,
    bhramtal4,
    bhramtal5,
    bhramtal6,
  ],
  brochure: brahmatalBrochure,
  description: 'An enchanting winter Himalayan trek featuring a frozen alpine lake, snow-covered forests, golden sunsets, and a 180° view of towering Himalayan peaks. The experience blends trekking with curated OBS activities focused on reflection, fun, and human connection.',
  highlights: [
    'Frozen Brahmatal Lake & Brahmatal Top views',
    'Dense oak & rhododendron forests',
    'Golden sunset points',
    'Open sky campsites with star-filled skies',
    'Happiness Sharing sessions',
    'Meditation & Journaling',
    'Alpine Olympics',
    'Astro Nite (telescope experience)',
    'Surprise Activity'
  ],
  itinerary: [
    {
      day: 'Day 1',
      title: 'Dehradun/Rishikesh → Lohajung',
      description: '300 km drive / 10 hours through winding mountain roads and forests',
      type: 'Travel'
    },
    {
      day: 'Day 2',
      title: 'Lohajung → Gujreni',
      description: '4.5 km / 5 hours trek through oak–rhododendron forests and scenic streams. Campsite: Gujreni meadow',
      type: 'Trek'
    },
    {
      day: 'Day 3',
      title: 'Gujreni → Tilandi',
      description: '3 km / 4 hours ridge walk with thinning treeline and beautiful sunsets. Campsite: Tilandi with panoramic valley views',
      type: 'Trek'
    },
    {
      day: 'Day 4',
      title: 'Tilandi → Brahmatal via Brahmatal Top',
      description: '5.5 km / 8 hours. Stunning 180° Himalayan views from Brahmatal Top. Descent to frozen Brahmatal Lake. Night camping beside the lake',
      type: 'Trek'
    },
    {
      day: 'Day 5',
      title: 'Brahmatal → Lohajung',
      description: '8.5 km / 8 hours descend back to forests & villages',
      type: 'Trek'
    },
    {
      day: 'Day 6',
      title: 'Lohajung → Rishikesh/Dehradun',
      description: '300 km / 10 hours drive back with reflection time during return journey',
      type: 'Travel'
    }
  ],
  inclusions: [
    'Stay for 5 nights',
    'Entry/permit fees',
    'Local guide fee',
    'All meals from dinner on Day 1 to breakfast on Day 6',
    'Transportation from Dehradun/Rishikesh to Lohajung & back',
    'All OBS Signature Activities',
    'Welcome & Farewell gifts + Winner gifts',
    'Memories for a lifetime ;)'
  ],
  exclusions: [
    'Backpack offloading (if you opt for this)',
    'Extra personal expenses',
    'Costs due to landslides, roadblocks',
    'Anything not listed in inclusions'
  ],
  pricing: {
    trekFee: 10900,
    transportationFee: 2400,
    totalCostWithTransport: 13300,
    totalCostWithoutTransport: 10900,
    registrationFee: 3300,
    remainingAmountWithTransport: 10000,
    remainingAmountWithoutTransport: 7600,
    paymentDeadline: '1 March'
  },
  paymentLinks: {
    fullPaymentWithTransport: '#', // To be provided
    fullPaymentWithoutTransport: '#', // To be provided
    registrationOnly: '#', // To be provided
    remainingDuesWithTransport: '#', // To be provided
    remainingDuesWithoutTransport: '#' // To be provided
  },
  cancellationPolicy: [
    {
      period: 'Before 1 March',
      fee: '₹3,300',
      refund: 'Remaining amount'
    },
    {
      period: '1 March - 12 March',
      fee: '30% of total fee',
      refund: '70%'
    },
    {
      period: '13 March - 23 March',
      fee: '50% of total fee',
      refund: '50%'
    },
    {
      period: 'On or after 24 March',
      fee: '100%',
      refund: 'Non-refundable'
    }
  ],
  transportationRoute: 'Dehradun/Rishikesh to Dehradun/Rishikesh',
  registrationLink: 'https://bit.ly/4ozvA5R?r=qr'
};

