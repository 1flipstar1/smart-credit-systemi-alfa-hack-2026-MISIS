import React from 'react';
import { type TextSkeletonProps } from '../../types/text-skeleton-props';
type SkeletonProps = {
    wrapperClassName?: string;
    dataTestId?: string;
};
export declare function useSkeleton(showSkeleton?: boolean, skeletonProps?: TextSkeletonProps): {
    renderSkeleton: (props: SkeletonProps) => React.JSX.Element | null;
    textRef: React.RefObject<HTMLElement>;
};
export {};
