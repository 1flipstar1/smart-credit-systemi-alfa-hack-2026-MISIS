import React from 'react';
import { type BottomSheetSelectMobileProps } from '@alfalab/core-components-select/modern/shared';
export declare const InputAutocompleteMobile: React.ForwardRefExoticComponent<import("../types").InputAutocompleteCommonProps & {
    isBottomSheet?: boolean;
    transitionProps?: NonNullable<BottomSheetSelectMobileProps["bottomSheetProps"]>["transitionProps"];
    onApply?: () => void;
    onCancel?: () => void;
    title?: string;
    virtualKeyboard?: boolean;
} & React.RefAttributes<unknown>>;
