import React from 'react';
import { type UniversalModalDesktopProps } from './types/props';
export declare const UniversalModalDesktopComponent: React.ForwardRefExoticComponent<UniversalModalDesktopProps & React.RefAttributes<HTMLDivElement>>;
export declare const UniversalModalDesktop: React.ForwardRefExoticComponent<UniversalModalDesktopProps & React.RefAttributes<HTMLDivElement>> & {
    Header: React.ForwardRefExoticComponent<import("./components/header").HeaderDesktopProps & React.RefAttributes<HTMLDivElement>>;
    Content: React.FC<import("../components/base-content").ContentProps>;
    Footer: React.ForwardRefExoticComponent<import("../components/base-footer").FooterProps & React.RefAttributes<HTMLDivElement>>;
};
