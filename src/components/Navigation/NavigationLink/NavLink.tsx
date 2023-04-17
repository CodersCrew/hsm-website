import Link from 'next/link';

interface NavigationLinkProps {
  text: string;
  path: string;
  handleClick?: () => void;
}

export const NavigationLink = ({ path, text, handleClick }: NavigationLinkProps) => (
  <Link href={path} onClick={handleClick}>
    <li className="whitespace-nowrap p-2 text-base text-neutral/80">{text}</li>
  </Link>
);
