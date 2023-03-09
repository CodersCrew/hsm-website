import { ButtonProps } from './Button.types';

export const Button: React.FC<ButtonProps> = ({ kind, type = 'submit', className, children, ...props }) => (
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
    {children}
  </button>
);
