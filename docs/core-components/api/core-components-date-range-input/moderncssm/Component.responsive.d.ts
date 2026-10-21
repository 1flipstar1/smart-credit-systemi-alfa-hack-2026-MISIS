import React from 'react';
import { type ConditionalProps, type DateRangeInputProps } from './components/date-range-input';
export type DateRangeInputResponsiveProps = Omit<DateRangeInputProps, 'view' | 'picker' | 'onClose' | 'InputComponent'> & ConditionalProps & {
    /**
     * Контрольная точка, с нее начинается desktop версия
     * @default 1024
     */
    breakpoint?: number;
    /**
     * Версия, которая будет использоваться при серверном рендеринге
     */
    client?: 'desktop' | 'mobile';
};
export type DateRangeInputMedia = 'desktop' | 'mobile';
/**
 * @deprecated
 * use UniversalDateInput instead
 */
export declare const DateRangeInputResponsive: React.ForwardRefExoticComponent<DateRangeInputResponsiveProps & React.RefAttributes<HTMLInputElement>>;
