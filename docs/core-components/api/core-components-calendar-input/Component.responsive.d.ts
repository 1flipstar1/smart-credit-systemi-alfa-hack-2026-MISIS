import React from 'react';
import { type CalendarInputProps } from './components/calendar-input/Component';
export type CalendarInputResponsiveProps = Omit<CalendarInputProps, 'view'> & {
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
export type CalendarInputMedia = 'desktop' | 'mobile';
/**
 * @deprecated
 * use UniversalDateInput instead
 */
export declare const CalendarInputResponsive: React.ForwardRefExoticComponent<Omit<CalendarInputProps, "view"> & {
    /**
     * Контрольная точка, с нее начинается desktop версия
     * @default 1024
     */
    breakpoint?: number;
    /**
     * Версия, которая будет использоваться при серверном рендеринге
     */
    client?: "desktop" | "mobile";
} & React.RefAttributes<HTMLInputElement>>;
