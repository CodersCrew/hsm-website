import { PropsWithChildren } from 'react';

interface ContainerProps extends PropsWithChildren {
  className?: string;
}

export const MainSection: React.FC<ContainerProps> = ({ children, className }) => {
  return <section className={`mx-auto max-w-screen-xl text-base leading-7 ${className}`}>{children}</section>;
};
