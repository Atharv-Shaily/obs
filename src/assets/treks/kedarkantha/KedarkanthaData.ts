import kedarkantha1 from './kedarkantha_1.png';
import kedarkantha2 from './kedarkantha_2.png';
import kedarkantha3 from './kedarkantha_3.png';
import kedarkanthaBrochure from './kedarkantha_brochure.pdf';
import type { TrekData } from '../TrekData';

export const kedarkanthaData: TrekData = {
  id: 'kedarkantha',
  title: 'Kedarkantha Trek - Oh-Bhaisahab Experience',
  date: 'January 25-29, 2026',
  duration: '5 Days / 4 Nights',
  difficulty: 'Easy-Moderate',
  location: 'Sankri region, Uttarakhand',
  images: [
    kedarkantha1,
    kedarkantha2,
    kedarkantha3,
  ],
  brochure: kedarkanthaBrochure,
  description: 'An iconic winter summit trek famous for sunrise from Kedarkantha Peak, 360° Himalayan views, pine forests, snowy trails, and a perfect beginner-friendly experience enhanced with OBS activities.',
  highlights: [
    '12,500 ft summit sunrise',
    'Dense pine & maple forests',
    'Juda ka Talab frozen lake campsite',
    '360° panorama of Himalayan peaks',
    'Happiness Sharing sessions',
    'Meditation & Journaling',
    'Alpine Olympics',
    'AstroNite experience',
    'Surprise Activity'
  ],
  itinerary: [
    {
      day: 'Day 1',
      title: 'Dehradun → Sankri',
      description: '200 km drive / 8 hours. Group meetup, goodies distribution, OBS activities at Sankri',
      type: 'Travel'
    },
    {
      day: 'Day 2',
      title: 'Sankri → Juda ka Talab',
      description: '3.5 km / 4–5 hours trek through pine and maple forests. OBS activities (Alpine Olympics, Happiness Sharing, AstroNite)',
      type: 'Trek'
    },
    {
      day: 'Day 3',
      title: 'Juda ka Talab → Basecamp',
      description: '2.5 km / 2–3 hours through snowy meadows & oak–cedar forests. OBS activities (Alpine Circuit, Surprise Activity)',
      type: 'Trek'
    },
    {
      day: 'Day 4',
      title: 'Basecamp → Kedarkantha Summit → Juda ka Talab',
      description: '10.5 km total. Pre-dawn climb, golden sunrise from summit, return to Juda ka Talab. OBS Meditation & Journaling',
      type: 'Trek'
    },
    {
      day: 'Day 5',
      title: 'Juda ka Talab → Sankri → Dehradun',
      description: '3.5 km trek, then 200 km drive back to Dehradun',
      type: 'Trek + Travel'
    }
  ],
  inclusions: [
    'Stay for 4 nights',
    'All entry/permit fees',
    'Local guide fee',
    'All meals from dinner on Day 1 to breakfast on Day 5',
    'Transportation: Dehradun → Sankri → Dehradun',
    'All OBS Signature Activities',
    'Goodies + Gifts',
    'Memories for a lifetime ;)'
  ],
  exclusions: [
    'Backpack offloading (if you opt for this)',
    'Personal expenses (tips, laundry)',
    'Costs due to unforeseen events',
    'Anything not listed in inclusions'
  ],
  pricing: {
    trekFee: 0, // Combined in total
    transportationFee: 0, // Included in total
    totalCostWithTransport: 12000,
    totalCostWithoutTransport: 0, // Only transport option available
    registrationFee: 2000,
    remainingAmountWithTransport: 10000,
    remainingAmountWithoutTransport: 0,
    paymentDeadline: '20 December'
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
      period: 'Before 20 December',
      fee: '₹2,000',
      refund: 'Remaining amount'
    },
    {
      period: '21 December - 14 January',
      fee: '30% of total fee',
      refund: '70%'
    },
    {
      period: '15 January - 22 January',
      fee: '50% of total fee',
      refund: '50%'
    },
    {
      period: 'On or after 23 January',
      fee: '100%',
      refund: 'Non-refundable'
    }
  ],
  transportationRoute: 'Dehradun to Dehradun',
  registrationLink: 'https://u.payu.in/PAYUMN/0ILnD0cTCKt6'
};

