import React from 'react';
import { type DateTimeInputProps } from './components/date-time-input/Component';
export type DateTimeInputResponsiveProps = Omit<DateTimeInputProps, 'view' | 'InputComponent'> & {
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
export type DateTimeInputMedia = 'desktop' | 'mobile';
export declare const DateTimeInputResponsive: React.ForwardRefExoticComponent<Omit<DateTimeInputProps, "view" | "InputComponent"> & {
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
