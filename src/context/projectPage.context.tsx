import { createContext, Dispatch, FC, PropsWithChildren, SetStateAction, useContext, useState } from 'react';

import { HashtagVariant } from '@/components/Projects/Hashtag/Hashtag.types';
import { ProjectStatus } from '@/components/StatusTag/StatusTag.types';

export type ProjectContextValues = {
  filter: {
    statuses: ProjectStatus[];
    setStatuses: Dispatch<SetStateAction<ProjectStatus[]>>;
    hashtags: HashtagVariant[];
    setHashtags: Dispatch<SetStateAction<HashtagVariant[]>>;
  };
};

const initialValue: ProjectContextValues = {
  filter: {
    statuses: [],
    setStatuses: () => {},
    hashtags: [],
    setHashtags: () => {},
  },
};

const ProjectPageContext = createContext(initialValue);

export const ProjectContextProvider: FC<PropsWithChildren> = ({ children }) => {
  const [filterStatuses, setFilterStatuses] = useState<ProjectContextValues['filter']['statuses']>([]);
  const [filterHashtags, setFilterHashtags] = useState<ProjectContextValues['filter']['hashtags']>([]);
  // eslint-disable-next-line react/jsx-no-constructed-context-values
  const value: ProjectContextValues = {
    filter: {
      statuses: filterStatuses,
      setStatuses: setFilterStatuses,
      hashtags: filterHashtags,
      setHashtags: setFilterHashtags,
    },
  };

  return <ProjectPageContext.Provider value={value}>{children}</ProjectPageContext.Provider>;
};

export const useProjectPageContext = () => useContext(ProjectPageContext);
