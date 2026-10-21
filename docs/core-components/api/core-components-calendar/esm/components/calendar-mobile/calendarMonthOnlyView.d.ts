import React from 'react';
import { type CalendarContentProps } from './typings';
export declare const CalendarMonthOnlyView: ({ value, mode, rangeBehavior, month: monthTimestamp, minDate: minDateTimestamp, maxDate: maxDateTimestamp, defaultMonth: defaultMonthTimestamp, offDays, events, holidays, onChange, onMonthTitleClick, selectedFrom, selectedTo, yearsAmount, dayAddons, shape, scrollableContainer, clickableMonth, }: CalendarContentProps & {
    clickableMonth?: boolean;
}) => React.JSX.Element;
