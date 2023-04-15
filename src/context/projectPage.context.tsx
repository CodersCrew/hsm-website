import { createContext, Dispatch, FC, PropsWithChildren, SetStateAction, useState } from 'react';

import { HashtagVariant } from '@/components/Projects/Hashtag/Hashtag.types';
import { ProjectStatus } from '@/components/StatusTag/StatusTag.types';

export type ProjectContextValues = {
  filterStatuses: ProjectStatus[];
  setFilterStatuses: Dispatch<SetStateAction<ProjectStatus[]>>;
  filterHashtags: HashtagVariant[];
  setFilterHashtags: Dispatch<SetStateAction<HashtagVariant[]>>;
};

const initialValue: ProjectContextValues = {
  filterStatuses: [],
  setFilterStatuses: () => {},
  filterHashtags: [],
  setFilterHashtags: () => {},
};

export const ProjectPageContext = createContext(initialValue);

export const ProjectContextProvider: FC<PropsWithChildren> = ({ children }) => {
  const [filterStatuses, setFilterStatuses] = useState<ProjectContextValues['filterStatuses']>([]);
  const [filterHashtags, setFilterHashtags] = useState<ProjectContextValues['filterHashtags']>([]);
  // eslint-disable-next-line react/jsx-no-constructed-context-values
  const value: ProjectContextValues = {
    filterStatuses,
    setFilterStatuses,
    filterHashtags,
    setFilterHashtags,
  };

  return <ProjectPageContext.Provider value={value}>{children}</ProjectPageContext.Provider>;
};
