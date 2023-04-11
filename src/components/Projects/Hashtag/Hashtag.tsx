import Image from 'next/image';
import { FC, PropsWithChildren } from 'react';

import { PALETTE_COLORS } from '@/components/FigmaTheme';

import { HashtagProps } from './Hashtag.types';

const Hashtag: FC<PropsWithChildren<HashtagProps>> = ({
  variant,
  bgColor = PALETTE_COLORS['primary/20'],
  borderColor,
  children,
}) => (
  <div
    className={`bg-${bgColor} border-${
      !borderColor || 1
    } border-${borderColor}  flex items-center justify-center gap-2 rounded-full py-2 px-4 text-S_regular leading-S_regular text-${
      PALETTE_COLORS['primary/90']
    }`}
  >
    <Image src="/images/projects/hashtag.svg" width={20} height={20} alt={`${variant} hashtag`} />
    <p>{variant}</p>
    {children}
  </div>
);

export default Hashtag;
