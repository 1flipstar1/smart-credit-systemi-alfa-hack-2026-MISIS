import React, { type ComponentType, type SVGProps } from 'react';
import { type CustomButtonProps } from '@alfalab/core-components-custom-button/cssm';
import { type PickerButtonSize, type PickerButtonVariant } from '@alfalab/core-components-picker-button/cssm/shared';
import { type FieldProps as BaseFieldProps } from '@alfalab/core-components-select/cssm/shared';
type UselessProps = Partial<Pick<BaseFieldProps, 'selectedMultiple' | 'onClear' | 'FormControlComponent' | 'valueRenderer' | 'Arrow' | 'labelView' | 'toggleMenu' | 'setSelectedItems'>>;
type FieldProps = Pick<BaseFieldProps, 'open' | 'label' | 'innerProps'> & UselessProps & CustomButtonProps & {
    buttonSize?: PickerButtonSize;
    buttonVariant?: PickerButtonVariant;
    showArrow?: boolean;
    icon?: ComponentType<SVGProps<SVGSVGElement>>;
};
export declare const Field: ({ buttonSize, buttonVariant, backgroundColor, contentColor, stateType, label, open, rightAddons, innerProps, className, showArrow, icon, selectedMultiple, onClear, FormControlComponent, valueRenderer, Arrow, labelView, toggleMenu, setSelectedItems, ...restProps }: FieldProps) => React.JSX.Element;
export {};
