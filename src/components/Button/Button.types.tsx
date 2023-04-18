import { HTMLAttributes, PropsWithChildren } from 'react';

import { PaletteColorType } from '@/types/shared.types';

const buttonVariants = ['primary', 'secondary', 'toggle', 'filter', 'filterStatusOption'] as const;

export interface ButtonProps extends HTMLAttributes<HTMLButtonElement>, PropsWithChildren {
  kind: (typeof buttonVariants)[number];
  borderColor?: PaletteColorType;
  textColor?: PaletteColorType;
  type?: 'submit' | 'button' | 'reset';
}
