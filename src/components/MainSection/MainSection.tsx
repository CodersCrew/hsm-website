import { PropsWithChildren } from 'react';

interface ContainerProps extends PropsWithChildren {
  className?: string;
}

export const MainSection: React.FC<ContainerProps> = ({ children, className }) => {
  return <section className={`text-base leading-7 ${className} text-neutral/90`}>{children}</section>;
};
