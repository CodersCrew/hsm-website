import { HTMLAttributes } from 'react';

const pSizes = ['large', 'regular', 'small'] as const;

type PSizeVariant = (typeof pSizes)[number];

export type ParagraphProps = { size: PSizeVariant } & HTMLAttributes<HTMLParagraphElement>;

export const ParagraphClasses: { [key in PSizeVariant]: string } = {
  large: 'text-S_regular  leading-S_regular',
  regular: 'text-M_regular  leading-M_regular',
  small: 'text-L_regular  leading-L_regular',
};
