import { HTMLAttributes } from 'react';

const projectStatus = ['active', 'archival'] as const;
export type ProjectStatusVariants = (typeof projectStatus)[number];

export type StatusIcons = { [key in ProjectStatusVariants | 'cyclical']: string };

export interface StatusProps extends HTMLAttributes<HTMLDivElement> {
  kind: ProjectStatusVariants;
  ifCyclical: boolean;
}
