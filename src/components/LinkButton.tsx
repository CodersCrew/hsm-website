import Link from 'next/link';
import { ReactNode } from 'react';

interface LinkButtonProps {
  href: string;
  children: ReactNode;
  className?: string;
}

const LinkButton = ({ href, children, className }: LinkButtonProps) => (
  <Link
    href={href}
    className={`rounded-20 bg-primary/90  text-neutral/20 ${className} text-center`}
    target="_blank"
  >
    {children}
  </Link>
);

LinkButton.defaultProps = {
  className: '',
};

export default LinkButton;
