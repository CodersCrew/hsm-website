import Image from 'next/image';
import { Button } from '../Button';

export const SearchBar = () => (
  <div className="flex h-48 w-auto items-center justify-between bg-neutral/10 px-32 ">
    <div>SearchBar</div>
    <Button kind="filter">
      {' '}
      <Image width={24} height={24} src="/images/projects/filterIcon.svg" /> Filtry
    </Button>
  </div>
);
