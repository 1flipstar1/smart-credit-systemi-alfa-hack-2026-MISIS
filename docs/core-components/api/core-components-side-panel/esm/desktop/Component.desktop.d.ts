import React, { type ForwardRefExoticComponent, type RefAttributes } from 'react';
import { type BaseModalProps } from '@alfalab/core-components-base-modal/esm';
import { type DrawerProps } from '@alfalab/core-components-drawer/esm';
import { ContentDesktop } from '../components/content/Component.desktop';
import { type ControlsProps } from '../components/controls';
import { FooterDesktop } from '../components/footer/Component.desktop';
import { type HeaderProps } from '../components/header/Component';
export type SidePanelDesktopProps = BaseModalProps & Pick<DrawerProps, 'placement' | 'nativeScrollbar' | 'contentTransitionProps'> & {
    /**
     * Ширина модального окна
     * @default "s"
     */
    size?: 's' | 500;
    /**
     * Управление наличием закрывающего крестика
     * @default false
     */
    hasCloser?: boolean;
};
declare const SidePanelDesktopComponent: React.ForwardRefExoticComponent<BaseModalProps & Pick<DrawerProps, "placement" | "nativeScrollbar" | "contentTransitionProps"> & {
    /**
     * Ширина модального окна
     * @default "s"
     */
    size?: "s" | 500;
    /**
     * Управление наличием закрывающего крестика
     * @default false
     */
    hasCloser?: boolean;
} & React.RefAttributes<HTMLDivElement>>;
declare const HeaderDesktop: ForwardRefExoticComponent<Omit<HeaderProps, "titleSize" | "subtitle"> & RefAttributes<HTMLDivElement>>;
declare const ControlsDesktop: React.FC<Omit<ControlsProps, "mobileLayout">>;
declare const SidePanelDesktop: React.ForwardRefExoticComponent<BaseModalProps & Pick<DrawerProps, "placement" | "nativeScrollbar" | "contentTransitionProps"> & {
    /**
     * Ширина модального окна
     * @default "s"
     */
    size?: "s" | 500;
    /**
     * Управление наличием закрывающего крестика
     * @default false
     */
    hasCloser?: boolean;
} & React.RefAttributes<HTMLDivElement>> & {
    Content: React.FC<import("../components/content/Component.desktop").ContentDesktopProps>;
    Header: React.ForwardRefExoticComponent<Omit<HeaderProps, "subtitle" | "titleSize"> & React.RefAttributes<HTMLDivElement>>;
    Footer: React.FC<import("../components/footer/Component.desktop").FooterDesktopProps>;
    Controls: React.FC<Omit<ControlsProps, "mobileLayout">>;
};
export { SidePanelDesktop, SidePanelDesktopComponent as SidePanelComponentDesktop, ContentDesktop, HeaderDesktop, FooterDesktop, ControlsDesktop, };
