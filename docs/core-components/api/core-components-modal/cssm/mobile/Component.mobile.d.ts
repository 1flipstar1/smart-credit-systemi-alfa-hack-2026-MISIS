import React from 'react';
import { Content } from '../components/content/Component';
import { type ControlsProps } from '../components/controls';
import { Footer } from '../components/footer/Component';
import { Header } from '../components/header/Component';
import { type ModalMobileProps } from '../typings';
declare const ModalMobileComponent: React.ForwardRefExoticComponent<ModalMobileProps & React.RefAttributes<HTMLDivElement>>;
declare const ControlsMobile: React.FC<Omit<ControlsProps, "mobileLayout">>;
export declare const ModalMobile: React.ForwardRefExoticComponent<ModalMobileProps & React.RefAttributes<HTMLDivElement>> & {
    Content: React.FC<import("../typings").ContentProps>;
    Header: React.FC<import("../components/header/Component").HeaderProps>;
    Footer: React.FC<import("../components/footer/Component").FooterProps>;
    Controls: React.FC<Omit<ControlsProps, "mobileLayout">>;
};
export { ModalMobileComponent as ModalComponentMobile, Content as ContentMobile, Header as HeaderMobile, Footer as FooterMobile, ControlsMobile, };
