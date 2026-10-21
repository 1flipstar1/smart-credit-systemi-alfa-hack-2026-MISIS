import React from 'react';
import { type DateTimeInputProps } from '../components/date-time-input/Component';
export type DateTimeInputMobileProps = Omit<DateTimeInputProps, 'view' | 'InputComponent'>;
export declare const DateTimeInputMobile: React.ForwardRefExoticComponent<DateTimeInputMobileProps & React.RefAttributes<HTMLInputElement>>;
