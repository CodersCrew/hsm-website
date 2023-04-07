import { HTMLAttributes } from 'react';

const projectStatus = ['active', 'archival'] as const;
const additionalProjectStatuses = ['cyclical'] as const;
export const projectStatusesList = [...projectStatus, ...additionalProjectStatuses] as const;

export type ProjectStatusVariants = (typeof projectStatus)[number];

export type StatusIcons = { [key in (typeof projectStatusesList)[number]]: string };

export interface StatusProps extends HTMLAttributes<HTMLDivElement> {
  kind?: ProjectStatusVariants | null;
  ifCyclical: boolean;
}
