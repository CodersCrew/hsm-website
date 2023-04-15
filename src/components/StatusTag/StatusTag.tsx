import Image from 'next/image';
import { PropsWithChildren } from 'react';

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
}) => (
  <div
    {...props}
    className={` text-${textColor} bg-${bgColor} border-${
      borderColor || 1
    } border-${borderColor} flex gap-2 ${className}`}
  >
    {kind ? (
      <div className="flex gap-2 ">
        <Image src={STATUS_ICONS[kind]} width={20} height={20} alt={`${kind} project statusicon`} />
        {kind}
        {children}
      </div>
    ) : null}

    {ifCyclical ? (
      <div className="flex gap-2 ">
        <Image src={STATUS_ICONS.cyclical} width={20} height={20} alt="cyclical status project icon" />
        cyclical
        {children}
      </div>
    ) : null}
  </div>
);
