import React from 'react';
import { type SkeletonProps } from '@alfalab/core-components-skeleton/cssm';
import { type Styles, type TabListTitle } from '../../typings';
export declare const Title: React.ForwardRefExoticComponent<TabListTitle & Styles & Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "id" | "title"> & {
    focused?: boolean;
    isOption?: boolean;
    showSkeleton?: boolean;
    skeletonProps?: Omit<SkeletonProps, "visible">;
    onResize?: () => void;
} & React.RefAttributes<HTMLButtonElement>>;
