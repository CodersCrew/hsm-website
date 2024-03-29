import Image from 'next/image';
import { FC, PropsWithChildren } from 'react';

import { Paragraph } from '@/components/Paragraph/Paragraph';

import { HashtagProps } from './Hashtag.types';

const Hashtag: FC<PropsWithChildren<HashtagProps>> = ({
  variant,
  bgColor = 'primary/20',
  borderColor,
  textColor = 'primary/90',
  children,
  ...otherProps
}) => {
  const textColorProp = textColor ? `text-${textColor}` : null;
  const bgColorProp = bgColor ? `bg-${bgColor}` : null;
  const borderColorProp = borderColor ? `border-${borderColor}` : null;
  const ifBorderExist = !borderColor ? `border-${borderColor}` : 'border-1';

  return (
    <div
      {...otherProps}
      className={` ${bgColorProp} ${ifBorderExist} ${borderColorProp} flex items-center justify-center gap-2 rounded-full py-2 px-4 ${textColorProp} `}
    >
      <Image src="/images/projects/hashtag.svg" width={20} height={20} alt={`${variant} hashtag`} />
      <Paragraph size="small" textBold="semibold">
        {variant}
      </Paragraph>
      {children}
    </div>
  );
};

export default Hashtag;
