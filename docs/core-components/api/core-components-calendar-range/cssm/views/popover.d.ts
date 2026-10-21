import { type FC } from 'react';
import { type CalendarRangeProps } from '../Component';
export type CalendarRangePopoverProps = Omit<CalendarRangeProps, 'calendarPosition'>;
export declare const CalendarRangePopover: FC<CalendarRangePopoverProps>;
