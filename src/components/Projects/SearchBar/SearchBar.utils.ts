import { PaletteColorType } from '@/types/shared.types';

export const filterOptions = ['hashtags', 'statuses'] as const;
export const colorProperties = ['textColor', 'borderColor', 'bgColor'] as const;
export const FILTER_OPTIONS_VARIANTS: {
  [filterOption in (typeof filterOptions)[number]]: {
    [ifSelected in 'selected' | 'notSelected']: {
      [colorProp in (typeof colorProperties)[number]]: PaletteColorType;
    };
  };
} = {
  hashtags: {
    notSelected: {
      textColor: 'primary/90',
      borderColor: 'primary/40',
      bgColor: 'primary/20',
    },
    selected: {
      textColor: 'neutral/20',
      borderColor: 'primary/60',
      bgColor: 'primary/60',
    },
  },
  statuses: {
    notSelected: {
      textColor: 'neutral/90',
      borderColor: 'neutral/40',
      bgColor: 'neutral/10',
    },
    selected: {
      textColor: 'neutral/20',
      borderColor: 'primary/60',
      bgColor: 'primary/60',
    },
  },
};
