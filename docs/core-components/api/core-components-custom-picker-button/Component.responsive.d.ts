import React from 'react';
import { CustomButtonProps } from '@alfalab/core-components-custom-button';
import { type AdditionalMobileProps, type BottomSheetSelectMobileProps } from '@alfalab/core-components-select/shared';
import { type CustomPickerButtonDesktopProps } from './desktop';
export type CustomPickerButtonResponsiveProps = CustomPickerButtonDesktopProps & AdditionalMobileProps & BottomSheetSelectMobileProps & {
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
export declare const CustomPickerButtonResponsive: React.ForwardRefExoticComponent<Omit<import("@alfalab/core-components-picker-button/desktop").PickerButtonDesktopProps, "view" | "colors"> & Pick<CustomButtonProps, "backgroundColor" | "contentColor" | "stateType"> & AdditionalMobileProps & BottomSheetSelectMobileProps & {
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
} & React.RefAttributes<HTMLInputElement>>;
