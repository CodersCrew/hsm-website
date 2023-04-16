import { PaletteColorType } from '@/types/shared.types';

export const filterOptions = ['hashtags', 'statuses'] as const;
export const colorProperties = ['textColor', 'borderColor', 'bgColor'] as const;
export type FilterOptionsVariantsType = {
  [filterOption in (typeof filterOptions)[number]]: {
    [ifSelected in 'selected' | 'notSelected']: {
      [colorProp in (typeof colorProperties)[number]]: PaletteColorType;
    };
  };
};
export type IfIsInTheArrayProps = { array: string[]; item: string };
