import Image from 'next/image';
import { FC } from 'react';

import { HashtagProps } from './Hashtag.types';

const Hashtag: FC<HashtagProps> = ({ variant, bgColor = 'primary/20', borderColor }) => (
  <div
    className={`bg-${bgColor} border-${
      !borderColor || 1
    } border-${borderColor}  flex flex-grow-0 items-end justify-center gap-2 rounded-full py-2 px-4 text-S_regular leading-S_regular text-primary/90`}
  >
    <Image src="/images/projects/hashtag.svg" width={20} height={20} alt={`${variant} hashtag`} />
    <p>{variant}</p>
  </div>
);

export default Hashtag;
