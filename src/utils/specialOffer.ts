import type { TrekData } from '../assets/treks/TrekData';

type SpecialOffer = NonNullable<TrekData['specialOffer']>;

/** Returns the trek's specialOffer if it is active today in IST, otherwise null. */
export function getActiveOffer(trek: TrekData): SpecialOffer | null {
  const offer = trek.specialOffer;
  if (!offer) return null;
  const istDate = new Date(Date.now() + 5.5 * 60 * 60 * 1000);
  if (istDate.getUTCMonth() + 1 !== offer.validOn.month || istDate.getUTCDate() !== offer.validOn.day) return null;
  return offer;
}
