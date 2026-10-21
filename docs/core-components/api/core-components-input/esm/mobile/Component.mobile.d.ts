import React from 'react';
import { type BaseInputProps } from '../components/base-input';
export type InputMobileProps = Omit<BaseInputProps, 'FormControlComponent'>;
export declare const InputMobile: React.ForwardRefExoticComponent<InputMobileProps & React.RefAttributes<HTMLInputElement>>;
