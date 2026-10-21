import React from 'react';
import { type BaseFormControlProps } from '../components/base-form-control';
export type FormControlDesktopProps = Omit<BaseFormControlProps, 'styles' | 'colorStyles'>;
export declare const FormControlDesktop: React.ForwardRefExoticComponent<FormControlDesktopProps & React.RefAttributes<HTMLDivElement>>;
