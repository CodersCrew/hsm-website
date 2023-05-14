import Image from 'next/image';
import { PropsWithChildren } from 'react';

import { Paragraph } from '../Paragraph/Paragraph';
import { StatusProps } from './StatusTag.types';
import { STATUS_ICONS } from './StatusTag.utils';

export const StatusTag: React.FC<PropsWithChildren<StatusProps>> = ({
  kind,
  ifCyclical,
  className,
  children,
  bgColor = 'transparent',
  borderColor = 'transparent',
  textColor = 'inherit',
  ...props
}) => {
  const textColorProp = textColor ? `text-${textColor}` : null;
  const bgColorProp = bgColor ? `bg-${bgColor}` : null;
  const borderColorProp = borderColor ? `border-${borderColor}` : null;
  const ifBorderExist = borderColor ? `border-${borderColor}` : 'border-1';

  return (
    <div
      {...props}
      className={` ${textColorProp} ${bgColorProp} ${ifBorderExist} ${borderColorProp} flex gap-2 ${className}`}
    >
      {kind ? (
        <div className="flex gap-2 ">
          <Image src={STATUS_ICONS[kind]} width={20} height={20} alt={`${kind} project status icon`} />
          <Paragraph textBold="semibold">{kind}</Paragraph>
          {children}
        </div>
      ) : null}

      {ifCyclical ? (
        <div className="flex gap-2 ">
          <Image src={STATUS_ICONS.cykliczny} width={20} height={20} alt="cyclical status project icon" />
          <Paragraph textBold="semibold">cyclical</Paragraph>
          {children}
        </div>
      ) : null}
    </div>
  );
};
