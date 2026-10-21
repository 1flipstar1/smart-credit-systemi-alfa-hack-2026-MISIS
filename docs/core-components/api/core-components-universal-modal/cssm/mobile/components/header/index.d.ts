import { type FC } from 'react';
import { type NavigationBarPrivateProps } from '@alfalab/core-components-navigation-bar-private/cssm';
export type HeaderMobileProps = Omit<NavigationBarPrivateProps, 'size' | 'view' | 'parentRef'>;
export declare const HeaderMobile: FC<HeaderMobileProps>;
