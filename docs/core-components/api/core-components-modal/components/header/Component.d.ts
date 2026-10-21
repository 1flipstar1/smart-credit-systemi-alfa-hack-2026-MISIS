import { type FC } from 'react';
import { type NavigationBarPrivateProps } from '@alfalab/core-components-navigation-bar-private';
export type HeaderProps = Omit<NavigationBarPrivateProps, 'size' | 'view' | 'parentRef'>;
export declare const Header: FC<HeaderProps>;
