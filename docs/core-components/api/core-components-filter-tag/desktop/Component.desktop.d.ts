import React from 'react';
import { type PrivateProps } from '../types/base-filter-tag-private-props';
import { type BaseFilterTagProps } from '../types/base-filter-tag-props';
export type FilterTagDesktopProps = Omit<BaseFilterTagProps, keyof PrivateProps>;
export declare const FilterTagDesktop: React.ForwardRefExoticComponent<FilterTagDesktopProps & React.RefAttributes<HTMLDivElement>>;
