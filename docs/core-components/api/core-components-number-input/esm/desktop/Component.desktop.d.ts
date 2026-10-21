import React from 'react';
import { type NumberInputProps } from '../components/number-input';
export type NumberInputDesktopProps = Omit<NumberInputProps, 'Input' | 'breakpoint' | 'view'>;
export declare const NumberInputDesktop: React.ForwardRefExoticComponent<NumberInputDesktopProps & React.RefAttributes<HTMLInputElement>>;
