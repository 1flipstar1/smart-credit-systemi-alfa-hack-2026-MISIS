import React from 'react';
import { type BaseFormControlProps } from '../components/base-form-control';
export type FormControlMobileProps = Omit<BaseFormControlProps, 'styles' | 'colorStyles'>;
export declare const FormControlMobile: React.ForwardRefExoticComponent<FormControlMobileProps & React.RefAttributes<HTMLDivElement>>;
