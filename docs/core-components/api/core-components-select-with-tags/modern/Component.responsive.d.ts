import React from 'react';
export declare const SelectWithTags: React.ForwardRefExoticComponent<Omit<import("@alfalab/core-components-select/typings").BaseSelectProps, "onChange" | "Field" | "nativeSelect" | "multiple" | "autocomplete" | "selected"> & {
    value?: string;
    onInput?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    selected?: Array<import("@alfalab/core-components-select/typings").OptionShape | string>;
    onChange?: (payload: {
        selectedMultiple: Array<import("@alfalab/core-components-select/typings").OptionShape | string>;
        initiator?: import("@alfalab/core-components-select/typings").OptionShape | null;
        name?: string;
    }) => void;
    autocomplete?: boolean;
    match?: import("./types").OptionMatcher;
    Tag?: import("./types").TagComponent;
    collapseTagList?: boolean;
    moveInputToNewLine?: boolean;
    transformCollapsedTagText?: (collapsedCount: number) => string;
    transformTagText?: (tagText?: React.ReactNode) => React.ReactNode;
    breakpoint?: number;
    client?: "desktop" | "mobile";
    defaultMatchMediaValue?: boolean | (() => boolean);
} & React.RefAttributes<HTMLInputElement>>;
