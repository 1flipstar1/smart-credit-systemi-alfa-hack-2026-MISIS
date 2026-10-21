import React from 'react';
import { type CalendarInputProps } from '../components/calendar-input/Component';
export type CalendarInputDesktopProps = Omit<CalendarInputProps, 'view'>;
/**
 * @deprecated
 * use UniversalDateInput instead
 */
export declare const CalendarInputDesktop: React.ForwardRefExoticComponent<CalendarInputDesktopProps & React.RefAttributes<HTMLInputElement>>;
