import { HTMLAttributes, PropsWithChildren } from 'react';

export interface ButtonProps extends HTMLAttributes<HTMLButtonElement>, PropsWithChildren {
  kind: 'primary' | 'secondary' | 'toggle' | 'filter';
  type?: 'submit' | 'reset' | 'button';
}
