import React from 'react';
import { type NavigationBarPrivateProps } from '@alfalab/core-components-navigation-bar-private/esm';
export type HeaderProps = Omit<NavigationBarPrivateProps, 'size' | 'view' | 'parentRef'>;
export declare const Header: React.ForwardRefExoticComponent<HeaderProps & React.RefAttributes<HTMLDivElement>>;
