import { type FC, type RefObject } from 'react';
import { type NavigationBarPrivateProps } from '@alfalab/core-components-navigation-bar-private/esm';
import { type ColorType } from '../../types';
export type HeaderProps = Omit<NavigationBarPrivateProps, 'view' | 'size'> & {
    headerRef: RefObject<HTMLDivElement>;
    headerOffset: number;
    colors?: ColorType;
    showSwipeMarker?: boolean;
};
export declare const Header: FC<HeaderProps>;
