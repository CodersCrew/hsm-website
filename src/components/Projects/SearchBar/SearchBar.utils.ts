import { FilterOptionsVariantsType, IfIsInTheArrayProps } from './SearchBar.types';

export const FILTER_OPTIONS_VARIANTS: FilterOptionsVariantsType = {
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

export const ifIsInTheArray = ({ array, item }: IfIsInTheArrayProps) =>
  !!array.find((statusFilter) => statusFilter === item);
