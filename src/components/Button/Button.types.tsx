import { HTMLAttributes } from 'react';

export interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  text: string;
  kind: 'primary' | 'secondary' | 'toggle';
  type?: 'submit' | 'reset' | 'button';
}
