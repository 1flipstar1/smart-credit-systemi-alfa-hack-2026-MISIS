import React from 'react';
import { type ConditionalProps, type DateRangeInputProps } from '../components/date-range-input';
export type DateRangeInputDesktopProps = Omit<DateRangeInputProps, 'view' | 'picker' | 'onClose' | 'InputComponent'> & ConditionalProps;
/**
 * @deprecated
 * use UniversalDateInput instead
 */
export declare const DateRangeInputDesktop: React.ForwardRefExoticComponent<DateRangeInputDesktopProps & React.RefAttributes<HTMLInputElement>>;
