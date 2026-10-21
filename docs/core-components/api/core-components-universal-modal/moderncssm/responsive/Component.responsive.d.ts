import React from 'react';
import { type UniversalModalResponsiveProps } from '../typings';
export declare const UniversalModal: React.ForwardRefExoticComponent<UniversalModalResponsiveProps & React.RefAttributes<HTMLDivElement>>;
export declare const UniversalModalResponsive: React.ForwardRefExoticComponent<UniversalModalResponsiveProps & React.RefAttributes<HTMLDivElement>> & {
    Header: React.ForwardRefExoticComponent<import("./components/header").HeaderResponsiveProps & React.RefAttributes<HTMLDivElement>>;
    Content: React.FC<import("./components/content").ContentResponsiveProps>;
    Footer: React.ForwardRefExoticComponent<import("./components/footer").FooterResponsiveProps & React.RefAttributes<HTMLDivElement>>;
};
