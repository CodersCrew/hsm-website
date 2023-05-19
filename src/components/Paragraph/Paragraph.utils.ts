import { HTMLAttributes } from 'react';

type PSizeVariant = 'large' | 'regular' | 'small';
type BoldVariant = 'normal' | 'semibold' | 'bold';

export type ParagraphProps = { size?: PSizeVariant; textBold?: BoldVariant } & HTMLAttributes<HTMLParagraphElement>;

export const ParagraphClasses: Record<PSizeVariant, string> = {
  large: 'text-L_regular leading-L_regular',
  regular: 'text-M_regular leading-M_regular',
  small: 'text-S_regular leading-S_regular',
};
