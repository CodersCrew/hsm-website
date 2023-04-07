export const hashtagsList = [
  'ekologia',
  'wystawa',
  'papier',
  'budowa',
  'prototyp',
  'sztuka',
  'wykłady',
  'badania',
] as const;
export type HashtagVariant = (typeof hashtagsList)[number];

export type HashtagProps = {
  variant: HashtagVariant;
};
