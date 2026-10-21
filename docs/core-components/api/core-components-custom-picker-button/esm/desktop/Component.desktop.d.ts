import React from 'react';
import { type CustomButtonProps } from '@alfalab/core-components-custom-button/esm';
import { type PickerButtonDesktopProps } from '@alfalab/core-components-picker-button/esm/desktop';
export type CustomPickerButtonDesktopProps = Omit<PickerButtonDesktopProps, 'view' | 'colors'> & Pick<CustomButtonProps, 'backgroundColor' | 'contentColor' | 'stateType'>;
export declare const CustomPickerButtonDesktop: React.ForwardRefExoticComponent<Omit<PickerButtonDesktopProps, "view" | "colors"> & Pick<CustomButtonProps, "backgroundColor" | "contentColor" | "stateType"> & React.RefAttributes<HTMLInputElement>>;
