import React, { type ElementType } from 'react';
import { type FormControlMobileProps } from '@alfalab/core-components-form-control/mobile';
import { type FieldProps as BaseFieldProps } from '@alfalab/core-components-select/shared';
type FieldProps = {
    /**
     * Компонент FormControl
     */
    FormControlComponent?: ElementType;
};
export type AutocompleteMobileFieldProps = FormControlMobileProps & Omit<BaseFieldProps, 'selected' | 'multiple' | 'success'> & {
    /**
     * Значение поля ввода
     */
    value?: string;
};
export declare const AutocompleteMobileField: ({ size, open, disabled, value, innerProps, dataTestId, fieldClassName, labelView, placeholder, Arrow, valueRenderer, toggleMenu, setSelectedItems, selectedMultiple, FormControlComponent, rightAddons, error, readOnly, clear, success, onClear, onInput, colors, ...restProps }: AutocompleteMobileFieldProps & FieldProps) => React.JSX.Element;
export {};
