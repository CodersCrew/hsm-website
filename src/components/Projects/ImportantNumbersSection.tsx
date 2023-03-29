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
    <div className="flex h-44 items-end justify-center font-lato text-H1 font-semibold leading-H1">
      Projekty w liczbach
    </div>
    <div className="flex justify-center gap-6 border-2 px-32 pt-16 pb-24 align-top ">
      {Object.keys(importantNumbersAndDescription).map((category) => {
        const { number, description } = importantNumbersAndDescription[category as Category];

        return (
          <div key={number} className="flex h-36 w-96 flex-col gap-12 ">
            <p className="flex h-16 justify-center font-lato text-Display font-bold leading-none text-primary/60">
              {number}
            </p>
            <span className="flex justify-center text-center font-lato text-H4 font-semibold leading-H4">
              {description}
            </span>
          </div>
        );
      }, numberCategories)}
    </div>
  </div>
);
