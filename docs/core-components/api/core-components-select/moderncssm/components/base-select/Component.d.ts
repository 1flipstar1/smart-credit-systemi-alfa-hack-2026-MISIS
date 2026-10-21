import React from 'react';
export declare const BaseSelect: React.ForwardRefExoticComponent<import("../../typings").BaseSelectProps & import("../../typings").AdditionalMobileProps & import("../../typings").BottomSheetSelectMobileProps & import("../../typings").ModalSelectMobileProps & {
    isBottomSheet?: boolean;
    view: "desktop" | "mobile";
    Popover?: React.ForwardRefExoticComponent<import("@alfalab/core-components-popover").PopoverProps & React.RefAttributes<HTMLDivElement>>;
    BottomSheet?: React.ForwardRefExoticComponent<import("@alfalab/core-components-bottom-sheet").BottomSheetProps & React.RefAttributes<HTMLDivElement>>;
    ModalMobile?: React.ForwardRefExoticComponent<import("@alfalab/core-components-modal/typings").ModalMobileProps & React.RefAttributes<HTMLDivElement>> & {
        Header: React.FC<import("@alfalab/core-components-modal/shared").ModalHeaderProps>;
        Footer: React.FC<import("@alfalab/core-components-modal/shared").ModalFooterProps>;
        Content: React.FC<import("@alfalab/core-components-modal/typings").ContentProps>;
    };
} & React.RefAttributes<unknown>>;
