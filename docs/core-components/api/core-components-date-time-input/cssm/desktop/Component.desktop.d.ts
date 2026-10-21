import React from 'react';
import { type DateTimeInputProps } from '../components/date-time-input/Component';
export type DateTimeInputDesktopProps = Omit<DateTimeInputProps, 'view' | 'InputComponent'>;
/**
 * @deprecated
 * use UniversalDateInput instead
 */
export declare const DateTimeInputDesktop: React.ForwardRefExoticComponent<DateTimeInputDesktopProps & React.RefAttributes<HTMLInputElement>>;
