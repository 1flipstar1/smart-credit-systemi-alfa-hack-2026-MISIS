import React from 'react';
import { Content } from './components/content/Component';
import { Controls } from './components/controls';
import { Footer } from './components/footer/Component';
import { Header } from './components/header/Component';
declare const ModalResponsiveComponent: React.ForwardRefExoticComponent<import("@alfalab/core-components-base-modal").BaseModalProps & {
    size?: "fullscreen" | 500 | 600 | 800 | 1140;
    fixedPosition?: boolean;
    hasCloser?: boolean;
    iOSLock?: boolean;
} & {
    breakpoint?: number;
    client?: "desktop" | "mobile";
    defaultMatchMediaValue?: boolean | (() => boolean);
} & React.RefAttributes<HTMLDivElement>>;
export declare const ModalResponsive: React.ForwardRefExoticComponent<import("@alfalab/core-components-base-modal").BaseModalProps & {
    size?: "fullscreen" | 500 | 600 | 800 | 1140;
    fixedPosition?: boolean;
    hasCloser?: boolean;
    iOSLock?: boolean;
} & {
    breakpoint?: number;
    client?: "desktop" | "mobile";
    defaultMatchMediaValue?: boolean | (() => boolean);
} & React.RefAttributes<HTMLDivElement>> & {
    Header: React.FC<import("./components/header/Component").HeaderProps>;
    Content: React.FC<import("./typings").ContentProps>;
    Footer: React.FC<import("./components/footer/Component").FooterProps>;
    Controls: React.FC<import("./components/controls").ControlsProps>;
};
export { ModalResponsiveComponent as ModalComponentResponsive, Header as HeaderResponsive, Content as ContentResponsive, Footer as FooterResponsive, Controls as ControlsResponsive, };
