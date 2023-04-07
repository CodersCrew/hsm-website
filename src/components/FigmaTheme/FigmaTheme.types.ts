const paletteColors = [
  'neutral/10',
  'neutral/20',
  'neutral/40',
  'neutral/70',
  'neutral/80',
  'neutral/90',
  'primary/20',
  'primary/40',
  'primary/60',
  'primary/80',
  'primary/90',
  'secondary/10',
  'secondary/60',
  'secondary/100',
  'black',
] as const;
export type PaletteColorType = (typeof paletteColors)[number];

export type PaletteColors = { [key in PaletteColorType]: key };
