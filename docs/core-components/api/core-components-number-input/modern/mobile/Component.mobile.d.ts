import React from 'react';
import { type NumberInputProps } from '../components/number-input';
export type NumberInputMobileProps = Omit<NumberInputProps, 'Input' | 'breakpoint' | 'view'>;
export declare const NumberInputMobile: React.ForwardRefExoticComponent<NumberInputMobileProps & React.RefAttributes<HTMLInputElement>>;
