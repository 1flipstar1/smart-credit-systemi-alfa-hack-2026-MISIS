import React from 'react';
import { type MaskedInputProps } from '@alfalab/core-components-masked-input/moderncssm';
export type PhoneInputProps = Omit<MaskedInputProps, 'onBeforeDisplay' | 'type' | 'mask'> & {
    clearableCountryCode?: boolean;
};
export declare const PhoneInput: React.ForwardRefExoticComponent<Omit<MaskedInputProps, "type" | "onBeforeDisplay" | "mask"> & {
    clearableCountryCode?: boolean;
} & React.RefAttributes<HTMLInputElement>>;
