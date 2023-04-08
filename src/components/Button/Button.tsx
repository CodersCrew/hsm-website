import { PALETTE_COLORS } from '../FigmaTheme';
import { ButtonProps } from './Button.types';

export const Button: React.FC<ButtonProps> = ({ kind, className, borderColor, textColor, children, ...props }) => (
  <button
    className={`
                py-2 px-6 font-normal
                ${
                  kind === 'primary' &&
                  `rounded-20 bg-${PALETTE_COLORS['primary/90']} text-${textColor || PALETTE_COLORS['neutral/20']}
                `
                }
                ${kind === 'secondary' && `rounded-20 bg-${PALETTE_COLORS['primary/20']}`}
                ${
                  kind === 'toggle' &&
                  `rounded-2xl border-2 border-${borderColor || PALETTE_COLORS['neutral/40']} py-3 text-${
                    textColor || PALETTE_COLORS['primary/60']
                  }`
                }
                ${
                  kind === 'filter' &&
                  `flex flex-row gap-4 rounded-2xl border-2 border-${
                    borderColor || PALETTE_COLORS['neutral/40']
                  } py-4 px-6 text-${textColor || PALETTE_COLORS['primary/60']}`
                }
                ${
                  kind === 'filterStatusOption' &&
                  `flex flex-row gap-4 rounded-full border-1 border-${PALETTE_COLORS['neutral/40']} bg-${
                    PALETTE_COLORS['neutral/10']
                  } py-2 px-4 ${textColor || PALETTE_COLORS['neutral/40']}`
                }

                ${className}
            `}
    {...props}
  >
    {children}
  </button>
);
