import React, { type ForwardRefExoticComponent } from 'react';
import { type BottomSheetProps } from '@alfalab/core-components-bottom-sheet/esm';
import { type FormControlProps } from '@alfalab/core-components-form-control/esm';
import { type PopoverProps } from '@alfalab/core-components-popover/esm';
import { type BaseSelectProps, type OptionShape } from '@alfalab/core-components-select/esm/shared';
export declare const BaseSelectWithTags: React.ForwardRefExoticComponent<Omit<BaseSelectProps, "onChange" | "Field" | "nativeSelect" | "multiple" | "autocomplete" | "selected"> & {
    value?: string;
    onInput?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    selected?: Array<OptionShape | string>;
    onChange?: (payload: {
        selectedMultiple: Array<OptionShape | string>;
        initiator?: OptionShape | null;
        name?: string;
    }) => void;
    autocomplete?: boolean;
    match?: import("../../types").OptionMatcher;
    Tag?: import("../../types").TagComponent;
    collapseTagList?: boolean;
    moveInputToNewLine?: boolean;
    transformCollapsedTagText?: (collapsedCount: number) => string;
    transformTagText?: (tagText?: React.ReactNode) => React.ReactNode;
    breakpoint?: number;
    client?: "desktop" | "mobile";
    defaultMatchMediaValue?: boolean | (() => boolean);
} & {
    view: "mobile" | "desktop";
    FormControlComponent: ForwardRefExoticComponent<FormControlProps>;
    Popover?: ForwardRefExoticComponent<PopoverProps>;
    BottomSheet?: ForwardRefExoticComponent<BottomSheetProps>;
} & React.RefAttributes<HTMLInputElement>>;
