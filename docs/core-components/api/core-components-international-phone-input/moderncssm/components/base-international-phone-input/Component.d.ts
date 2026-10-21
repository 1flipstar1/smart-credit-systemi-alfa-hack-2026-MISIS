import React from 'react';
import { type InputProps } from '@alfalab/core-components-input/moderncssm';
import { type InputAutocompleteProps } from '@alfalab/core-components-input-autocomplete/moderncssm';
export declare const BaseInternationalPhoneInput: React.ForwardRefExoticComponent<import("../../types").CommonPhoneInputProps & {
    Input: React.FC<InputProps>;
    InputAutocomplete: React.FC<InputAutocompleteProps>;
    SelectComponent: React.ElementType;
    view: "desktop" | "mobile";
} & Omit<InputProps, "onBlur" | "onFocus" | "onChange" | "onScroll" | "onInput"> & Partial<Omit<InputAutocompleteProps, "onChange" | "onScroll" | "onInput" | "leftAddons">> & React.RefAttributes<HTMLInputElement>>;
