import sandak1 from './sandak_1.png';
import sandak2 from './sandak_2.png';
import sandak3 from './sandak_3.png';
import sandak4 from './sandak_4.png';
import sandakphuBrochure from './Sandakphu-Phalut_brochure.pdf';
import type { TrekData } from '../TrekData';

export const sandakphuData: TrekData = {
  id: 'sandakphu',
  title: 'Sandakphu-Phalut Trek - Oh-Bhaisahab Experience',
  date: 'February 14-20, 2026',
  duration: '7 Days',
  difficulty: 'Easy-Moderate',
  location: 'West Bengal-Nepal border (Singalila Range)',
  images: [
    sandak1,
    sandak2,
    sandak3,
    sandak4,
  ],
  brochure: sandakphuBrochure,
  description: 'A legendary ridge walk offering views of four of the world\'s tallest mountains—Everest, Lhotse, Makalu, and Kanchenjunga—in a single frame. The route follows the Indo-Nepal border, passing through forests, meadows, teahouses, and stunning sunrises above the clouds, enhanced with OBS Activities. Price includes 5% GST.',
  highlights: [
    'Four giants visible together: Everest, Lhotse, Makalu, Kanchenjunga',
    'Walk along India-Nepal border',
    'Sleeping Buddha formation',
    'Singalila National Park wildlife',
    'Beginner-friendly long-distance Himalayan trek',
    'Cozy teahouses & GTA huts',
    'Happiness Sharing sessions',
    'Meditation & Journaling',
    'Reflection Circles',
    'Leadership & Team Tasks'
  ],
  itinerary: [
    {
      day: 'Day 1',
      title: 'NJP/Bagdogra → Sepi',
      description: 'Drive through tea gardens and forests. Evening homestay stay',
      type: 'Travel'
    },
    {
      day: 'Day 2',
      title: 'Sepi → Samanden',
      description: '~14 km / 7–8 hours trek through villages & forests. Teahouse stay',
      type: 'Trek'
    },
    {
      day: 'Day 3',
      title: 'Samanden → Molley',
      description: '~10 km / 7 hours. Enter Singalila National Park. First view of Kanchenjunga. Stay in GTA hut',
      type: 'Trek'
    },
    {
      day: 'Day 4',
      title: 'Molley → Phalut → Sabargam',
      description: '~17.5 km / 8–9 hours ridge walk with 360° views. Lunch at Phalut (11,810 ft). Descend to Sabargam',
      type: 'Trek'
    },
    {
      day: 'Day 5',
      title: 'Sabargam → Aal',
      description: '~13 km / 7–8 hours gentle day with continuous Himalayan views',
      type: 'Trek'
    },
    {
      day: 'Day 6',
      title: 'Aal → Sandakphu → Gurdum',
      description: '~10 km / 7 hours. Sunrise from Sandakphu (11,930 ft). Descend through forests',
      type: 'Trek'
    },
    {
      day: 'Day 7',
      title: 'Gurdum → Sepi → NJP/Bagdogra',
      description: '~4 km walk, then drive back (6–7 hours)',
      type: 'Trek + Travel'
    }
  ],
  inclusions: [
    'Accommodation for 6 nights',
    'All meals from dinner on Day 1 to breakfast on Day 7',
    'All permits & Singalila National Park fees',
    'OBS Activities (Alpine Olympics, Meditation, etc.)',
    'Expert trek leader, guides, porters',
    'Surprise goodies',
    'Memories for a lifetime ;)'
  ],
  exclusions: [
    'All ground transport from NJP/Bagdogra to Sepi and return after the trek',
    'Transit meals',
    'Personal expenses (snacks, beverages, souvenirs)',
    'Gear rentals',
    'Insurance',
    'Emergency evacuation (if any)',
    'Anything not listed in inclusions'
  ],
  pricing: {
    trekFee: 12900, // Trek fee without transport
    transportationFee: 0, // No transport option
    totalCostWithTransport: 0, // No transport option
    totalCostWithoutTransport: 13545, // ₹12,900 + 5% GST
    registrationFee: 2900,
    remainingAmountWithTransport: 0, // No transport option
    remainingAmountWithoutTransport: 10645, // ₹13,545 - ₹2,900
    paymentDeadline: '14 January'
  },
  paymentLinks: {
    fullPaymentWithTransport: '#', // To be provided
    fullPaymentWithoutTransport: '#', // To be provided
    registrationOnly: '#', // To be provided
    remainingDuesWithTransport: '#', // To be provided
    remainingDuesWithoutTransport: '#' // To be provided
  },
  cancellationPolicy: [], // To be added later
  transportationRoute: 'Transportation not included - arrange your own from NJP/Bagdogra to Sepi',
  registrationLink: 'https://u.payu.in/PAYUMN/0rCitifALR1e'
};

