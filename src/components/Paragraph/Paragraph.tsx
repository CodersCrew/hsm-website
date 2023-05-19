import { FC, PropsWithChildren } from 'react';

import { ParagraphClasses, ParagraphProps } from './Paragraph.utils';

export const Paragraph: FC<PropsWithChildren<ParagraphProps>> = ({
  size = 'regular',
  textBold = 'normal',
  children,
  ...restProps
}) => {
  const pClasses = ParagraphClasses[size];

  return (
    <p {...restProps} className={`${pClasses} ${restProps.className} font-${textBold}`}>
      {children}
    </p>
  );
};
