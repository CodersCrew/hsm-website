import { DetailedHTMLProps, HTMLAttributes } from 'react';

import { PaletteColorType } from '@/components/FigmaTheme/FigmaTheme.types';

export const hashtagsList = [
  'ekologia',
  'wystawa',
  'papier',
  'budowa',
  'prototyp',
  'sztuka',
  'wykłady',
  'badania',
] as const;
export type HashtagVariant = (typeof hashtagsList)[number];

export type HashtagProps = {
  variant: HashtagVariant;
  bgColor?: PaletteColorType;
  borderColor?: PaletteColorType;
} & DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>;
