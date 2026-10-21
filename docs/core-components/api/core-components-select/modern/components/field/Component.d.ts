import React, { type ElementType } from 'react';
import { type FormControlProps } from '@alfalab/core-components-form-control/modern';
import { type FieldProps as BaseFieldProps } from '../../typings';
type FieldProps = {
    /**
     * Компонент FormControl
     */
    FormControlComponent?: ElementType;
};
export declare const Field: ({ size, open, multiple, error, hint, disabled, label, labelView, placeholder, selectedMultiple, selected, rightAddons, valueRenderer, setSelectedItems, toggleMenu, Arrow, innerProps, dataTestId, fieldClassName, FormControlComponent, clear, onClear, valueSeparator, ...restProps }: BaseFieldProps & FormControlProps & FieldProps) => React.JSX.Element;
export {};
