import React from 'react';
import { type UniversalModalMobileProps } from './types/props';
export declare const UniversalModalMobileComponent: React.ForwardRefExoticComponent<UniversalModalMobileProps & React.RefAttributes<HTMLDivElement>>;
export declare const UniversalModalMobile: React.ForwardRefExoticComponent<UniversalModalMobileProps & React.RefAttributes<HTMLDivElement>> & {
    Header: React.FC<import("./components/header").HeaderMobileProps>;
    Content: React.FC<import("../components/base-content").ContentProps>;
    Footer: React.FC<import("../components/base-footer").FooterProps>;
};
