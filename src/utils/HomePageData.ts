// Import images
import groupSummit from '../assets/treks/yulla/group-summit.png';
import groupMountain from '../assets/treks/spiti/group-mountain.png';
import groupBackpack from '../assets/treks/yulla/group-backpack.png';
import kuariJuneImg from '../assets/treks/kuari/kuari-ranges.png';
import kuariMayImg from '../assets/treks/KuariJune/kuari-top.png'
import trekGroup from '../assets/trek_group.png';
import bhramtalGroup from '../assets/treks/bhramtal/bhrama_group.png';
import nagTibbaGroup1 from '../assets/treks/nagtibba/nag_group.png'
import nagTibbaGroup2 from '../assets/treks/nagtibba/nag_group_2.png'


export const featuredTreks = [
  {
    id: 'kuari-may',
    title: 'Kuari Pass Trek',
    subtitle: 'Trekking Club x OBS Experience',
    date: 'May 23-28, 2026',
    duration: '6 Days / 5 Nights',
    location: 'Garhwal Himalayas, Uttarakhand',
    price: '₹12,999',
    priceNote: 'with transport, incl. GST',
    image: kuariMayImg,
    highlights: [
      '360° Himalayan panorama at 12,500 ft',
      'Views of Nanda Devi, Trishul & Chaukhamba',
      'Alpine meadows on the legendary Curzon Trail',
    ],
    color: '#0891b2',
  },
  {
    id: 'kuari-june',
    title: 'Kuari Pass Trek',
    subtitle: 'Summer Himalayan Adventure',
    date: 'June 5-10, 2026',
    duration: '6 Days / 5 Nights',
    location: 'Garhwal Himalayas, Uttarakhand',
    price: '₹12,999',
    priceNote: 'with transport, incl. GST',
    image: kuariJuneImg,
    highlights: [
      '360° Himalayan panorama at 12,500 ft',
      'Views of Nanda Devi, Trishul & Chaukhamba',
      'Alpine meadows on the legendary Curzon Trail',
    ],
    color: '#0891b2',
  }
];

export const carouselImages = [
  {
    src: groupMountain,
    alt: 'Spiti Valley',
  },
  {
    src: groupSummit,
    alt: 'Yulla Kanda Trek',
  },
  {
    src: trekGroup,
    alt: 'Trek Group',
  },
  {
    src: bhramtalGroup,
    alt: 'Brahmatal Group',
  },
  {
    src: groupBackpack,
    alt: 'Yulla Kanda Trek Group with Backpack',
  },
  {
    src: nagTibbaGroup1,
    alt: 'Nagtibba Group 1',
  },
  {
    src: nagTibbaGroup2,
    alt: 'Nagtibba Group 2',
  },
];
