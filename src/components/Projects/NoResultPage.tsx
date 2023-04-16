import { FC, PropsWithChildren } from 'react';

export const NoResultPage: FC<PropsWithChildren> = ({ children }) => (
  <div className="bg-neutral/20 px-16 py-32 text-neutral/90">
    <h3>Wynik wyszukiwania dla {`"${children}"`}</h3>
    <p className="leading-L_regular_ text-L_regular font-normal">
      Wygląda na to, że nic nie znaleźliśmy! Spróbuj wpisać inne słowa kluczowe lub skorzystaj z filtrów.
    </p>
  </div>
);
