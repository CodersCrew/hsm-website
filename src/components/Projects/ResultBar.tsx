import { FC, PropsWithChildren } from 'react';

export const ResultBar: FC<PropsWithChildren<{ ifResult: boolean }>> = ({ children, ifResult }) => (
  <div className={`bg-neutral/20 px-16 py-${ifResult ? null : 32} pt-${ifResult ? 16 : null} text-neutral/90`}>
    <h3>Wynik wyszukiwania dla {`"${children}"`}</h3>
    {!ifResult ? (
      <p className="leading-L_regular_ text-L_regular font-normal">
        Wygląda na to, że nic nie znaleźliśmy! Spróbuj wpisać inne słowa kluczowe lub skorzystaj z filtrów.
      </p>
    ) : null}
  </div>
);
