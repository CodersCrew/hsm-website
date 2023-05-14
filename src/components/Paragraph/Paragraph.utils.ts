import { HTMLAttributes } from 'react';

const pSizes = ['large', 'regular', 'small'] as const;
const boldVariants = ['normal', 'semibold', 'bold'] as const;

type PSizeVariant = (typeof pSizes)[number];
type BoldVariant = (typeof boldVariants)[number];

export type ParagraphProps = { size?: PSizeVariant; textBold?: BoldVariant } & HTMLAttributes<HTMLParagraphElement>;

export const ParagraphClasses: { [key in PSizeVariant]: string } = {
  large: 'text-L_regular leading-L_regular',
  regular: 'text-M_regular leading-M_regular',
  small: 'text-S_regular leading-S_regular',
};
