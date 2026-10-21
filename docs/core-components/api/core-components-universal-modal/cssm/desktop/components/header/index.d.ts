import React from 'react';
import { type NavigationBarPrivateProps } from '@alfalab/core-components-navigation-bar-private/cssm';
export interface HeaderDesktopProps extends Omit<NavigationBarPrivateProps, 'size' | 'view' | 'parentRef' | 'titleSize' | 'subtitle'> {
    /**
     * Заголовок в шапке крупного размера
     * @default false
     */
    bigTitle?: boolean;
}
export declare const HeaderDesktop: React.ForwardRefExoticComponent<HeaderDesktopProps & React.RefAttributes<HTMLDivElement>>;
