import React, { type ComponentType, type SVGProps } from 'react';
import { type ButtonProps } from '@alfalab/core-components-button/esm';
import { type FieldProps as BaseFieldProps } from '@alfalab/core-components-select/esm/typings';
import { type PickerButtonSize, type PickerButtonVariant } from '../types';
type FieldProps = Omit<BaseFieldProps, 'size' | 'hint' | 'success' | 'error' | 'placeholder'> & ButtonProps & {
    buttonSize?: PickerButtonSize;
    buttonVariant?: PickerButtonVariant;
    showArrow?: boolean;
    icon?: ComponentType<SVGProps<SVGSVGElement>>;
};
export declare const Field: ({ buttonSize, buttonVariant, view, label, open, multiple, rightAddons, Arrow, innerProps, className, selected, selectedMultiple, setSelectedItems, toggleMenu, valueRenderer, showArrow, labelView, FormControlComponent, icon, onClear, ...restProps }: FieldProps) => React.JSX.Element;
export {};
