import React from 'react';
import { type BaseModalProps } from '@alfalab/core-components-base-modal/moderncssm';
import { type DrawerProps } from '@alfalab/core-components-drawer/moderncssm';
import { Controls } from './components/controls';
import { Header } from './components/header/Component';
export type SidePanelResponsiveProps = BaseModalProps & Pick<DrawerProps, 'contentTransitionProps' | 'placement' | 'nativeScrollbar'> & {
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
    /**
     * Контрольная точка, с нее начинается desktop версия
     * @default 1024
     */
    breakpoint?: number;
    /**
     * Версия, которая будет использоваться при серверном рендеринге
     */
    client?: 'desktop' | 'mobile';
    /**
     * Значение по-умолчанию для хука useMatchMedia
     * @deprecated Используйте client
     */
    defaultMatchMediaValue?: boolean | (() => boolean);
};
declare const SidePanelResponsiveComponent: React.ForwardRefExoticComponent<BaseModalProps & Pick<DrawerProps, "placement" | "nativeScrollbar" | "contentTransitionProps"> & {
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
    /**
     * Контрольная точка, с нее начинается desktop версия
     * @default 1024
     */
    breakpoint?: number;
    /**
     * Версия, которая будет использоваться при серверном рендеринге
     */
    client?: "desktop" | "mobile";
    /**
     * Значение по-умолчанию для хука useMatchMedia
     * @deprecated Используйте client
     */
    defaultMatchMediaValue?: boolean | (() => boolean);
} & React.RefAttributes<HTMLDivElement>>;
declare const ContentResponsive: React.FC<import("./components/content/Component").ContentProps> | React.FC<import("./components/content/Component.desktop").ContentDesktopProps>;
declare const FooterResponsive: React.FC<import("./components/footer/Component").FooterProps> | React.FC<import("./components/footer/Component.desktop").FooterDesktopProps>;
/** Респонсив компаунд */
declare const SidePanelResponsive: React.ForwardRefExoticComponent<BaseModalProps & Pick<DrawerProps, "placement" | "nativeScrollbar" | "contentTransitionProps"> & {
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
    /**
     * Контрольная точка, с нее начинается desktop версия
     * @default 1024
     */
    breakpoint?: number;
    /**
     * Версия, которая будет использоваться при серверном рендеринге
     */
    client?: "desktop" | "mobile";
    /**
     * Значение по-умолчанию для хука useMatchMedia
     * @deprecated Используйте client
     */
    defaultMatchMediaValue?: boolean | (() => boolean);
} & React.RefAttributes<HTMLDivElement>> & {
    Header: React.ForwardRefExoticComponent<import("./components/header/Component").HeaderProps & React.RefAttributes<HTMLDivElement>>;
    Controls: React.FC<import("./components/controls").ControlsProps>;
    Content: React.FC<import("./components/content/Component").ContentProps> | React.FC<import("./components/content/Component.desktop").ContentDesktopProps>;
    Footer: React.FC<import("./components/footer/Component").FooterProps> | React.FC<import("./components/footer/Component.desktop").FooterDesktopProps>;
};
export { SidePanelResponsive, SidePanelResponsiveComponent as SidePanelComponentResponsive, Header as HeaderResponsive, Controls as ControlsResponsive, ContentResponsive, FooterResponsive, };
