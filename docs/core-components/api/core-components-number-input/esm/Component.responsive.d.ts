import React from 'react';
import { type NumberInputProps } from './components/number-input';
export type NumberInputResponsiveProps = Omit<NumberInputProps, 'Input' | 'view'>;
export declare const NumberInputResponsive: React.ForwardRefExoticComponent<NumberInputResponsiveProps & React.RefAttributes<HTMLInputElement>>;
