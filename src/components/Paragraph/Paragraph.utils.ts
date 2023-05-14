import { HTMLAttributes } from 'react';

const pSizes = ['large', 'regular', 'small'] as const;

type PSizeVariant = (typeof pSizes)[number];

export type ParagraphProps = { size: PSizeVariant } & HTMLAttributes<HTMLParagraphElement>;

export const ParagraphClasses: { [key in PSizeVariant]: string } = {
  large: 'text-L_regular font-normal  leading-L_regular',
  regular: 'text-M_regular font-normal leading-M_regular',
  small: 'text-S_regular font-normal leading-S_regular',
};
