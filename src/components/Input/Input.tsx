import { PropsWithChildren } from 'react';

import { InputProps } from './Input.types';

export const Input: React.FC<PropsWithChildren<InputProps>> = ({ children, ...otherProps }) => (
  <div className="flex h-16 w-96 gap-4 rounded-2xl border-2 border-neutral/40 pl-6 ">
    {children}
    <input {...otherProps} className="w-full rounded-2xl outline-0" />
  </div>
);
