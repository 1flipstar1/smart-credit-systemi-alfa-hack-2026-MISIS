import React from 'react';
import { type BaseModalProps } from '@alfalab/core-components-base-modal/esm';
import { ContentMobile } from '../components/content/Component.mobile';
import { type ControlsProps } from '../components/controls';
import { FooterMobile } from '../components/footer/Component.mobile';
import { Header } from '../components/header/Component';
export type SidePanelMobileProps = BaseModalProps & {
    /**
     * Управление наличием закрывающего крестика
     * @default false
     */
    hasCloser?: boolean;
};
declare const SidePanelMobileComponent: React.ForwardRefExoticComponent<BaseModalProps & {
    /**
     * Управление наличием закрывающего крестика
     * @default false
     */
    hasCloser?: boolean;
} & React.RefAttributes<HTMLDivElement>>;
declare const ControlsMobile: React.FC<Omit<ControlsProps, "mobileLayout">>;
declare const SidePanelMobile: React.ForwardRefExoticComponent<BaseModalProps & {
    /**
     * Управление наличием закрывающего крестика
     * @default false
     */
    hasCloser?: boolean;
} & React.RefAttributes<HTMLDivElement>> & {
    Content: React.FC<import("../components/content/Component").ContentProps>;
    Header: React.ForwardRefExoticComponent<import("../components/header/Component").HeaderProps & React.RefAttributes<HTMLDivElement>>;
    Footer: React.FC<import("../components/footer/Component").FooterProps>;
    Controls: React.FC<Omit<ControlsProps, "mobileLayout">>;
};
export { SidePanelMobile, SidePanelMobileComponent as SidePanelComponentMobile, ContentMobile, Header as HeaderMobile, FooterMobile, ControlsMobile, };
