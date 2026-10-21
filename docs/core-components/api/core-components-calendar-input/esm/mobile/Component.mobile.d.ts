import React from 'react';
import { type CalendarInputProps } from '../components/calendar-input/Component';
export type CalendarInputMobileProps = Omit<CalendarInputProps, 'view'>;
/**
 * @deprecated
 * use UniversalDateInput instead
 */
export declare const CalendarInputMobile: React.ForwardRefExoticComponent<CalendarInputMobileProps & React.RefAttributes<HTMLInputElement>>;
