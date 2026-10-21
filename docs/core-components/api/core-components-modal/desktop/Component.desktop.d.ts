import React from 'react';
import { Content } from '../components/content/Component';
import { type ControlsProps } from '../components/controls';
import { Footer } from '../components/footer/Component';
import { type HeaderProps } from '../components/header/Component';
declare const ModalDesktopComponent: React.ForwardRefExoticComponent<import("@alfalab/core-components-base-modal").BaseModalProps & {
    size?: "fullscreen" | 500 | 600 | 800 | 1140;
    fixedPosition?: boolean;
    hasCloser?: boolean;
    iOSLock?: boolean;
} & React.RefAttributes<HTMLDivElement>>;
declare const HeaderDesktop: React.FC<Omit<HeaderProps, "titleSize" | "subtitle">>;
declare const ControlsDesktop: React.FC<Omit<ControlsProps, "mobileLayout">>;
export declare const ModalDesktop: React.ForwardRefExoticComponent<import("@alfalab/core-components-base-modal").BaseModalProps & {
    size?: "fullscreen" | 500 | 600 | 800 | 1140;
    fixedPosition?: boolean;
    hasCloser?: boolean;
    iOSLock?: boolean;
} & React.RefAttributes<HTMLDivElement>> & {
    Content: React.FC<import("../typings").ContentProps>;
    Header: React.FC<Omit<HeaderProps, "subtitle" | "titleSize">>;
    Footer: React.FC<import("../components/footer/Component").FooterProps>;
    Controls: React.FC<Omit<ControlsProps, "mobileLayout">>;
};
export { ModalDesktopComponent as ModalComponentDesktop, Content as ContentDesktop, HeaderDesktop, Footer as FooterDesktop, ControlsDesktop, };
