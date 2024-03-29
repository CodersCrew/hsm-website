import Image from 'next/image';

import { styleObject } from '@/constants/globalStyling';

export interface PartnershipTypeProps {
  image: {
    src: string;
    alt: string;
  };
  partnershipType: string;
}

export const PartnershipType = ({ image, partnershipType }: PartnershipTypeProps) => (
  <div className="my-3 flex flex-col items-center justify-center gap-3 md:w-72">
    <Image src={image.src} alt={image.alt} width={64} height={64} />
    <p className={`${styleObject.h5}`}>{partnershipType}</p>
  </div>
);
