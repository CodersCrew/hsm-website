import { HTMLAttributes } from 'react';

import { PaletteColorType } from '@/types/shared.types';

const projectStatus = ['active', 'archival'] as const;
const additionalProjectStatuses = ['cyclical'] as const;
export const projectStatusesList = [...projectStatus, ...additionalProjectStatuses] as const;

export type ProjectStatus = (typeof projectStatusesList)[number];
export type StatusOptions = { [key in ProjectStatus]: key };

export type ProjectStatusVariants = (typeof projectStatus)[number];

export type StatusIcons = { [key in ProjectStatus]: string };

export interface StatusProps extends HTMLAttributes<HTMLDivElement> {
  kind?: ProjectStatusVariants | null;
  ifCyclical: boolean;
  bgColor?: PaletteColorType;
  borderColor?: PaletteColorType;
  textColor?: PaletteColorType | 'inherit';
}
