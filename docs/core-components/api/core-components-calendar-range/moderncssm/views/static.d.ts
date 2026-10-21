import { type FC } from 'react';
import { type CalendarInputProps } from '@alfalab/core-components-calendar-input/moderncssm';
import { type CalendarRangeProps } from '../Component';
type DateInputProps = Omit<CalendarInputProps, 'onCalendarOpen' | 'onCalendarClose' | 'onChange'>;
interface CalendarRangeStaticProps extends Omit<CalendarRangeProps, 'calendarPosition' | 'inputFromProps' | 'inputToProps'> {
    /**
     * Отображать начальный месяц слева или справа (влияет только на начальный рендер)
     */
    defaultMonthPosition?: 'left' | 'right';
    /**
     * Пропсы для инпута начальной даты диапазона
     */
    inputFromProps?: DateInputProps;
    /**
     * Пропсы для инпута конечной даты диапазона
     */
    inputToProps?: DateInputProps;
}
export declare const CalendarRangeStatic: FC<CalendarRangeStaticProps>;
export {};
