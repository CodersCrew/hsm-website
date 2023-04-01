import Image from 'next/image';

import { Button } from '../Button';
import { Input } from '../Input';

export const SearchBar = () => (
  <div className="flex h-48 w-auto items-center justify-between bg-neutral/10 px-32 ">
    <Input placeholder="Nazwa projektu">
      <Image width={24} height={24} src="/images/projects/search.svg" alt="Search input icon" />
    </Input>
    <Button kind="filter">
      {' '}
      <Image width={24} height={24} src="/images/projects/filterIcon.svg" alt="Filter button icon" /> Filtry
    </Button>
  </div>
);
