const numberCategories = ['projects', 'partners', 'prototypes'] as const;
type Category = (typeof numberCategories)[number];
const importantNumbersAndDescription: {
  [key in Category]: { number: number; description: string };
} = {
  projects: { number: 32, description: 'zrealizowanych projektów' },
  partners: { number: 68, description: 'partnerów, z którymi współpracowaliśmy' },
  prototypes: { number: 51, description: 'wybudowanych prototypów' },
};

export const ImportantNumbersSection = () => (
  <div>
    <div className="div">Projekty w liczbach</div>
    {Object.keys(importantNumbersAndDescription).map((category) => {
      const { number, description } = importantNumbersAndDescription[category as Category];

      return (
        <div key={number}>
          <p>{number}</p>
          <span>{description}</span>
        </div>
      );
    }, numberCategories)}
  </div>
);
