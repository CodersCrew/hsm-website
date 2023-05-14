import { FC, PropsWithChildren } from 'react';

import { Paragraph } from '../Paragraph/Paragraph';

export const ResultBar: FC<PropsWithChildren<{ ifResult: boolean }>> = ({ children, ifResult }) => (
  <div className={`bg-neutral/20 px-16 py-${ifResult ? null : 32} pt-${ifResult ? 16 : null} text-neutral/90`}>
    <h3>{children ? `Wynik wyszukiwania dla "${children}"` : `Brak wyników wyszukiwania`}</h3>
    {!ifResult ? (
      <Paragraph size="large">
        Wygląda na to, że nic nie znaleźliśmy! Spróbuj wpisać inne słowa kluczowe lub skorzystaj z filtrów.
      </Paragraph>
    ) : null}
  </div>
);
