import React from 'react';
import { type BaseToastProps } from './components/base-toast';
export type ToastProps = BaseToastProps;
export declare const Toast: React.ForwardRefExoticComponent<Omit<import("@alfalab/core-components-toast-plate/components/base-toast-plate").BaseToastPlateProps, "styles"> & {
    breakpoint?: number;
    client?: "desktop" | "mobile";
    defaultMatchMediaValue?: boolean | (() => boolean);
} & Pick<import("@alfalab/core-components-popover").PopoverProps, "open" | "fallbackPlacements" | "position" | "getPortalContainer" | "preventFlip" | "transition" | "useAnchorWidth"> & {
    anchorElement?: HTMLElement | null;
    autoCloseDelay?: number;
    bottomOffset?: number;
    zIndex?: number;
    closeWithClickOutside?: boolean;
    onClose: () => void;
    ToastPlate?: typeof import("@alfalab/core-components-toast-plate").ToastPlate;
    offset?: [number, number];
} & React.RefAttributes<HTMLDivElement>>;
