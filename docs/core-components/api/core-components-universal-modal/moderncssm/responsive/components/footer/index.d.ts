import React from 'react';
import { type FooterDesktopProps } from '../../../desktop';
import { type FooterMobileProps } from '../../../mobile';
export interface FooterResponsiveProps extends FooterDesktopProps, FooterMobileProps {
}
export declare const FooterResponsive: React.ForwardRefExoticComponent<FooterResponsiveProps & React.RefAttributes<HTMLDivElement>>;
