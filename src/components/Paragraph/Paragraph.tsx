import { FC, PropsWithChildren } from 'react';

import { ParagraphClasses, ParagraphProps } from './Paragraph.utils';

export const Paragraph: FC<PropsWithChildren<ParagraphProps>> = ({ size, children, ...restProps }) => {
  const pClasses = ParagraphClasses[size];

  return (
    <p {...restProps} className={`${pClasses}${restProps.className}` }>
      {children}
    </p>
  );
};
