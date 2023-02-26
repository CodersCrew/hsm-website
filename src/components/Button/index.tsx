import { HTMLAttributes } from 'react';

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  text: string;
  kind: 'primary' | 'secondary' | 'toggle';
  type?: 'submit' | 'reset' | 'button';
}

const Button = ({ kind, text, type, className, ...props }: ButtonProps) => (
  <button
    type={type}
    className={`
        py-2 px-6 font-normal
        ${kind === 'primary' && 'rounded-20 bg-primary/90 text-neutral/20'}
        ${kind === 'secondary' && 'rounded-20 bg-primary/20'}
        ${kind === 'toggle' && 'rounded-2xl border-2 border-neutral/40 py-3 text-primary/60'}
        ${className}
            `}
    {...props}
  >
    {text}
  </button>
);

Button.defaultProps = {
  type: 'submit',
};

export default Button;
