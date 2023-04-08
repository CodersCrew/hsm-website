import { HTMLAttributes, PropsWithChildren } from 'react';

import { PaletteColorType } from '../FigmaTheme/FigmaTheme.types';

const buttonVariants = ['primary', 'secondary', 'toggle', 'filter', 'filterStatusOption'] as const;

export interface ButtonProps extends HTMLAttributes<HTMLButtonElement>, PropsWithChildren {
  kind: (typeof buttonVariants)[number];
  borderColor?: PaletteColorType;
  textColor?: PaletteColorType;
}
