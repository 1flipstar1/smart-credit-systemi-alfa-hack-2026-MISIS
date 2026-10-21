import React from 'react';
import { type PopoverProps } from '@alfalab/core-components-popover';
import { type ToastPlate as ToastPlateComponent, type ToastPlateProps } from '@alfalab/core-components-toast-plate';
export type BaseToastProps = ToastPlateProps & Pick<PopoverProps, 'fallbackPlacements' | 'position' | 'open' | 'getPortalContainer' | 'preventFlip' | 'transition' | 'useAnchorWidth'> & {
    /**
     * Элемент, относительного которого появляется тост.
     * Если не передавать, тост будет позиционирован снизу экрана (position: fixed).
     */
    anchorElement?: HTMLElement | null;
    /**
     * Через сколько исчезнет компонент (ms).
     */
    autoCloseDelay?: number;
    /**
     * Отступ снизу (при fixed-позиционировании).
     */
    bottomOffset?: number;
    /**
     * z-index компонента
     */
    zIndex?: number;
    /**
     * Разрешить закрывать toast кликом вне компонента
     * @default true
     */
    closeWithClickOutside?: boolean;
    /**
     * Обработчик закрытия компонента.
     */
    onClose: () => void;
    /**
     * Плашка тоста.
     * По-дефолту рендерит компонент ToastPlate
     */
    ToastPlate?: typeof ToastPlateComponent;
    /**
     * Смещение поповера.
     * Если позиционирование top, bottom, то [x, y].
     * Если позиционирование left, right то [y, x].
     * Необходимо использовать вместе с anchorElement
     */
    offset?: [number, number];
};
export declare const BaseToast: React.ForwardRefExoticComponent<Omit<import("@alfalab/core-components-toast-plate/components/base-toast-plate").BaseToastPlateProps, "styles"> & {
    breakpoint?: number;
    client?: "desktop" | "mobile";
    defaultMatchMediaValue?: boolean | (() => boolean);
} & Pick<PopoverProps, "open" | "fallbackPlacements" | "position" | "getPortalContainer" | "preventFlip" | "transition" | "useAnchorWidth"> & {
    /**
     * Элемент, относительного которого появляется тост.
     * Если не передавать, тост будет позиционирован снизу экрана (position: fixed).
     */
    anchorElement?: HTMLElement | null;
    /**
     * Через сколько исчезнет компонент (ms).
     */
    autoCloseDelay?: number;
    /**
     * Отступ снизу (при fixed-позиционировании).
     */
    bottomOffset?: number;
    /**
     * z-index компонента
     */
    zIndex?: number;
    /**
     * Разрешить закрывать toast кликом вне компонента
     * @default true
     */
    closeWithClickOutside?: boolean;
    /**
     * Обработчик закрытия компонента.
     */
    onClose: () => void;
    /**
     * Плашка тоста.
     * По-дефолту рендерит компонент ToastPlate
     */
    ToastPlate?: typeof ToastPlateComponent;
    /**
     * Смещение поповера.
     * Если позиционирование top, bottom, то [x, y].
     * Если позиционирование left, right то [y, x].
     * Необходимо использовать вместе с anchorElement
     */
    offset?: [number, number];
} & React.RefAttributes<HTMLDivElement>>;
