import React from 'react';
import { type PrivateProps } from '../types/base-filter-tag-private-props';
import { type BaseFilterTagProps } from '../types/base-filter-tag-props';
export type FilterTagMobileProps = Omit<BaseFilterTagProps, keyof PrivateProps>;
export declare const FilterTagMobile: React.ForwardRefExoticComponent<FilterTagMobileProps & React.RefAttributes<HTMLDivElement>>;
