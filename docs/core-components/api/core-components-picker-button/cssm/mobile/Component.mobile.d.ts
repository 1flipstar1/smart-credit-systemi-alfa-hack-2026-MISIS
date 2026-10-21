import React from 'react';
import { type AdditionalMobileProps, type BottomSheetSelectMobileProps } from '@alfalab/core-components-select/cssm/shared';
import { type PickerButtonDesktopProps } from '../desktop';
export type PickerButtonMobileProps = Omit<PickerButtonDesktopProps, 'OptionsList' | 'Checkmark' | 'onScroll'> & AdditionalMobileProps & BottomSheetSelectMobileProps & {
    /**
     * Контрольная точка для кнопки, с нее начинается desktop версия
     * @default 1024
     */
    breakpoint?: number;
};
export declare const PickerButtonMobile: React.ForwardRefExoticComponent<Omit<PickerButtonDesktopProps, "onScroll" | "Checkmark" | "OptionsList"> & AdditionalMobileProps & BottomSheetSelectMobileProps & {
    /**
     * Контрольная точка для кнопки, с нее начинается desktop версия
     * @default 1024
     */
    breakpoint?: number;
} & React.RefAttributes<HTMLInputElement>>;
