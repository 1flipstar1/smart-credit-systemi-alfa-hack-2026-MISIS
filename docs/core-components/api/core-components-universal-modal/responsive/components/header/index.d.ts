import React from 'react';
import { type HeaderDesktopProps } from '../../../desktop';
import { type HeaderMobileProps } from '../../../mobile';
export interface HeaderResponsiveProps extends HeaderDesktopProps, HeaderMobileProps {
}
export declare const HeaderResponsive: React.ForwardRefExoticComponent<HeaderResponsiveProps & React.RefAttributes<HTMLDivElement>>;
