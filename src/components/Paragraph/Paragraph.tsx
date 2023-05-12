import { FC, PropsWithChildren } from 'react';

import { ParagraphClasses, ParagraphProps } from './Paragraph.utils';

export const Paragraph: FC<PropsWithChildren<ParagraphProps>> = ({ size, children }) => {
  const pClasses = ParagraphClasses[size];

  return <p className={pClasses}>{children}</p>;
};
