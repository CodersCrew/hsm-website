import Image from 'next/image';

export interface PartnershipTypeProps {
  image: {
    src: string;
    alt: string;
  };
  partnershipType: string;
}

export const PartnershipType = ({ image, partnershipType }: PartnershipTypeProps) => (
  <div className="my-3 flex items-center">
    <Image src={image.src} alt={image.alt} width={64} height={64} className="mr-6" />
    <p>{partnershipType}</p>
  </div>
);
