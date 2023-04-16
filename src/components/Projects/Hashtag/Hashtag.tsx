import Image from 'next/image';
import { FC, PropsWithChildren } from 'react';

import { HashtagProps } from './Hashtag.types';

const Hashtag: FC<PropsWithChildren<HashtagProps>> = ({
  variant,
  bgColor = 'primary/20',
  borderColor,
  textColor = 'primary/90',
  children,
  ...otherProps
}) => (
  <div
    {...otherProps}
    className={` bg-${bgColor} border-${
      !borderColor || 1
    } border-${borderColor} flex items-center justify-center gap-2 rounded-full py-2 px-4 text-S_regular leading-S_regular text-${textColor} `}
  >
    <Image src="/images/projects/hashtag.svg" width={20} height={20} alt={`${variant} hashtag`} />
    <p>{variant}</p>
    {children}
  </div>
);

export default Hashtag;
