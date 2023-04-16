import { createContext, Dispatch, FC, PropsWithChildren, SetStateAction, useContext, useState } from 'react';

import { HashtagVariant } from '@/components/Projects/Hashtag/Hashtag.types';
import { ProjectStatus } from '@/components/StatusTag/StatusTag.types';

export type ProjectContextValues = {
  filterStatuses: ProjectStatus[];
  setFilterStatuses: Dispatch<SetStateAction<ProjectStatus[]>>;
  filterHashtags: HashtagVariant[];
  setFilterHashtags: Dispatch<SetStateAction<HashtagVariant[]>>;
  inputFilter: string;
  setInputFilter: Dispatch<SetStateAction<string>>;
};

const initialValue: ProjectContextValues = {
  filterStatuses: [],
  setFilterStatuses: () => {},
  filterHashtags: [],
  setFilterHashtags: () => {},
  inputFilter: '',
  setInputFilter: () => {},
};

export const ProjectPageContext = createContext(initialValue);

export const ProjectContextProvider: FC<PropsWithChildren> = ({ children }) => {
  const [filterStatuses, setFilterStatuses] = useState<ProjectContextValues['filterStatuses']>([]);
  const [filterHashtags, setFilterHashtags] = useState<ProjectContextValues['filterHashtags']>([]);
  const [inputFilter, setInputFilter] = useState<ProjectContextValues['inputFilter']>('');
  // eslint-disable-next-line react/jsx-no-constructed-context-values
  const value: ProjectContextValues = {
    filterStatuses,
    setFilterStatuses,
    filterHashtags,
    setFilterHashtags,
    inputFilter,
    setInputFilter,
  };

  return <ProjectPageContext.Provider value={value}>{children}</ProjectPageContext.Provider>;
};

export const useProjectPageContext = () => useContext(ProjectPageContext);
