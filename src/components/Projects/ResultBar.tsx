import { FC, PropsWithChildren } from 'react';

import { Paragraph } from '../Paragraph/Paragraph';

export const ResultBar: FC<PropsWithChildren<{ ifResult: boolean }>> = ({ children, ifResult }) => (
  <div className={`bg-neutral/20 px-[120px] py-${ifResult ? null : 32} pt-16 text-neutral/90`}>
    <h3>{children ? `Wynik wyszukiwania dla "${children}"` : `Brak wyników wyszukiwania`}</h3>
    {!ifResult ? (
      <Paragraph size="large" className="pb-[268px]">
        Wygląda na to, że nic nie znaleźliśmy! Spróbuj wpisać inne słowa kluczowe lub skorzystaj z filtrów.
      </Paragraph>
    ) : null}
  </div>
);
