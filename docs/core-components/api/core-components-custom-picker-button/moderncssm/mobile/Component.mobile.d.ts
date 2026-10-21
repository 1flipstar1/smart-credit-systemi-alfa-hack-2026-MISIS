import React from 'react';
import { type CustomButtonProps } from '@alfalab/core-components-custom-button/moderncssm';
import { type PickerButtonMobileProps } from '@alfalab/core-components-picker-button/moderncssm/mobile';
export type CustomPickerButtonMobileProps = Omit<PickerButtonMobileProps, 'view' | 'colors'> & Pick<CustomButtonProps, 'backgroundColor' | 'contentColor' | 'stateType'>;
export declare const CustomPickerButtonMobile: React.ForwardRefExoticComponent<Omit<PickerButtonMobileProps, "view" | "colors"> & Pick<CustomButtonProps, "backgroundColor" | "contentColor" | "stateType"> & React.RefAttributes<HTMLInputElement>>;
