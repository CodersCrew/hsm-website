const hashtags = ['ekologia', 'wystawa', 'papier', 'budowa', 'prototyp', 'sztuka', 'wykłady', 'badania'] as const;
export type HashtagVariant = (typeof hashtags)[number];

export type HashtagProps = {
  variant: HashtagVariant;
};
