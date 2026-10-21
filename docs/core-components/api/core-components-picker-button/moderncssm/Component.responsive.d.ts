import React from 'react';
import { type AdditionalMobileProps, type BottomSheetSelectMobileProps } from '@alfalab/core-components-select/moderncssm/shared';
import { type PickerButtonDesktopProps } from './desktop';
export type PickerButtonResponsiveProps = PickerButtonDesktopProps & AdditionalMobileProps & BottomSheetSelectMobileProps & {
    /**
     * Контрольная точка, с нее начинается desktop версия
     * @default 1024
     */
    breakpoint?: number;
    /**
     * Версия, которая будет использоваться при серверном рендеринге
     */
    client?: 'desktop' | 'mobile';
};
export declare const PickerButtonResponsive: React.ForwardRefExoticComponent<Omit<import("@alfalab/core-components-select/typings").BaseSelectProps, "onFocus" | "size" | "hint" | "placeholder" | "selected" | "multiple" | "Arrow" | "autocomplete" | "closeOnSelect" | "allowUnselect" | "options" | "searchProps" | "showSearch" | "Search"> & Pick<import("@alfalab/core-components-button").ButtonProps, "view" | "rightAddons" | "leftAddons" | "loading"> & {
    options: Array<import("@alfalab/core-components-select/typings").BaseSelectProps["options"][0] & {
        icon?: React.ComponentType<React.SVGProps<SVGSVGElement>>;
    }>;
    size?: import("./types").PickerButtonSize;
    variant?: import("./types").PickerButtonVariant;
    showArrow?: boolean;
    icon?: React.ComponentType<React.SVGProps<SVGSVGElement>>;
} & AdditionalMobileProps & BottomSheetSelectMobileProps & {
    /**
     * Контрольная точка, с нее начинается desktop версия
     * @default 1024
     */
    breakpoint?: number;
    /**
     * Версия, которая будет использоваться при серверном рендеринге
     */
    client?: "desktop" | "mobile";
} & React.RefAttributes<HTMLInputElement>>;
