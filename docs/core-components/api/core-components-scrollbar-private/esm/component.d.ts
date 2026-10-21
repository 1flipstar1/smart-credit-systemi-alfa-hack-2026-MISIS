import React from 'react';
import { type Props as SimpleBarProps } from 'simplebar-react';
export interface ScrollbarPrivateProps extends Omit<SimpleBarProps, 'children' | 'scrollableNodeProps'> {
    children?: React.ReactNode;
    style?: React.CSSProperties;
    /**
     * @default false
     */
    native?: boolean;
    /**
     * @default default
     */
    colors?: 'default' | 'inverted';
    scrollableNodeProps?: React.ComponentProps<'div'>;
    contentNodeProps?: React.ComponentProps<'div'>;
}
export declare const ScrollbarPrivate: React.ForwardRefExoticComponent<ScrollbarPrivateProps & React.RefAttributes<import("simplebar-core").default>>;
