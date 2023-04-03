import Image from 'next/image';

import { StatusProps } from './StatusTag.types';
import STATUS_ICONS from './StatusTag.utils';

export const StatusTag: React.FC<StatusProps> = ({ kind, ifCyclical, ...props }) => (
  <div {...props} className="flex gap-2 text-S_regular font-semibold leading-S_regular text-primary/60 ">
    {kind !== null ? (
      <div className="flex gap-2 py-2 ">
        <Image src={STATUS_ICONS[kind]} width={20} height={20} alt={`${kind} project statusicon`} />
        {kind}{' '}
      </div>
    ) : null}

    {ifCyclical ? (
      <div className="flex gap-2 py-2">
        <Image src={STATUS_ICONS.cyclical} width={20} height={20} alt="cyclical status project icon" />
        cyclical
      </div>
    ) : null}
  </div>
);
