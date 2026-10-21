import React from 'react';
import { type BaseInputProps } from '../components/base-input';
export type InputDesktopProps = Omit<BaseInputProps, 'FormControlComponent'>;
export declare const InputDesktop: React.ForwardRefExoticComponent<InputDesktopProps & React.RefAttributes<HTMLInputElement>>;
