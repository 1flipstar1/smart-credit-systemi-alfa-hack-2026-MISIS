import React from 'react';
export declare const InputAutocompleteModalMobile: React.ForwardRefExoticComponent<import("../types").InputAutocompleteCommonProps & {
    isBottomSheet?: boolean;
    transitionProps?: NonNullable<import("@alfalab/core-components-select/typings").BottomSheetSelectMobileProps["bottomSheetProps"]>["transitionProps"];
    onApply?: () => void;
    onCancel?: () => void;
    title?: string;
    virtualKeyboard?: boolean;
} & React.RefAttributes<HTMLDivElement>>;
