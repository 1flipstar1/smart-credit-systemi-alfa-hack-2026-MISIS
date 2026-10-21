import React, { type RefObject } from 'react';
import { type TabsProps } from '../../typings';
type ScrollControlsProps = {
    className?: string;
    buttonClassName?: string;
    view: Exclude<TabsProps['view'], undefined>;
    size: TabsProps['size'];
    containerRef: RefObject<HTMLDivElement>;
    showSkeleton?: boolean;
};
export declare const ScrollControls: React.ForwardRefExoticComponent<ScrollControlsProps & React.RefAttributes<HTMLDivElement>>;
export {};
