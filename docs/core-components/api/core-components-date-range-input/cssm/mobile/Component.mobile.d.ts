import React from 'react';
import { type ConditionalProps, type DateRangeInputProps } from '../components/date-range-input';
export type DateRangeInputMobileProps = Omit<DateRangeInputProps, 'view' | 'picker' | 'onClose' | 'InputComponent'> & ConditionalProps;
/**
 * @deprecated
 * use UniversalDateInput instead
 */
export declare const DateRangeInputMobile: React.ForwardRefExoticComponent<DateRangeInputMobileProps & React.RefAttributes<HTMLInputElement>>;
