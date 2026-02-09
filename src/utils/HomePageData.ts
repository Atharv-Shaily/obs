// Import images
import kuariRanges from '../assets/treks/kuari/kuari-ranges.png';
import groupSummit from '../assets/treks/yulla/group-summit.png';
import groupMountain from '../assets/treks/spiti/group-mountain.png';
import groupBackpack from '../assets/treks/yulla/group-backpack.png';
import brahmatalImg from '../assets/treks/bhramtal/bhramtal.jpg';

// Featured treks data
export const featuredTreks = [
  {
    id: 'brahmatal',
    title: 'Brahmatal Trek',
    subtitle: 'Frozen Lake Adventure!',
    date: 'March 26-31, 2026',
    duration: '6 Days / 5 Nights',
    location: 'Garhwal Himalayas, Uttarakhand',
    price: '₹13,300',
    priceNote: 'with transport, incl. GST',
    image: brahmatalImg,
    highlights: ['Frozen Brahmatal Lake', '180° Himalayan views', 'Snow-covered forests'],
    color: '#0891b2'
  }
];

export const carouselImages = [
  {
    src: kuariRanges,
    alt: 'Kuari Pass Trek'
  },
  {
    src: groupSummit,
    alt: 'Yulla Kanda Trek'
  },
  {
    src: groupMountain,
    alt: 'Spiti Valley'
  },
  {
    src: groupBackpack,
    alt: 'Yulla Kanda Trek Group with Backpack'
  }
];
