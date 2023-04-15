import { ButtonProps } from './Button.types';

export const Button: React.FC<ButtonProps> = ({ kind, className, borderColor, textColor, children, ...props }) => (
  <button
    className={`
                py-2 px-6 font-normal
                ${
                  kind === 'primary' &&
                  `rounded-20 bg-primary/90 text-${textColor || 'neutral/20'}
                `
                }
                ${kind === 'secondary' && `rounded-20 bg-primary/20`}
                ${
                  kind === 'toggle' &&
                  `rounded-2xl border-2 border-${borderColor || 'neutral/40'} py-3 text-${textColor || 'primary/60'}`
                }
                ${
                  kind === 'filter' &&
                  `flex flex-row gap-4 rounded-2xl border-2 border-${borderColor || 'neutral/40'} py-4 px-6 text-${
                    textColor || 'primary/60'
                  }`
                }
                ${
                  kind === 'filterStatusOption' &&
                  `flex flex-row gap-4 rounded-full border-1 border-neutral/40 bg-${'neutral/10'} py-2 px-4 ${
                    textColor || 'neutral/40'
                  }`
                }

                ${className}
            `}
    {...props}
  >
    {children}
  </button>
);
