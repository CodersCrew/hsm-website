import Link from 'next/link';

import { Paragraph } from '@/components/Paragraph/Paragraph';

interface NavigationLinkProps {
  text: string;
  path: string;
  handleClick?: () => void;
}

export const NavigationLink = ({ path, text, handleClick }: NavigationLinkProps) => (
  <Link href={path} onClick={handleClick}>
    <li className="whitespace-nowrap p-2 text-neutral/80">
      <Paragraph>{text}</Paragraph>
    </li>
  </Link>
);
