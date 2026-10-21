import { type KeyboardEvent, type MouseEvent, type Ref } from 'react';
import { type Day, type DayAddons, type Month, type View } from './typings';
export type UseCalendarProps = {
    /**
     * Активный вид (выбор дней, месяцев, лет)
     */
    view?: View;
    /**
     * Выбранный месяц (controlled)
     */
    month?: Date;
    /**
     * Начальный месяц
     */
    defaultMonth: Date;
    /**
     * Минимальная дата, доступная для выбора
     */
    minDate?: Date;
    /**
     * Максимальная дата, доступная для выбора
     */
    maxDate?: Date;
    /**
     * Выбранная дата
     */
    selected?: Date;
    /**
     * Список событий
     */
    events?: Array<Date | number>;
    /**
     * Список отключенных для выбора дней
     */
    offDays?: Array<Date | number>;
    /**
     * Список выходных дней
     */
    holidays?: Array<Date | number>;
    /**
     * Обработчик изменения месяца (или года)
     */
    onMonthChange?: (month: number) => void;
    /**
     * Обработчик выбора даты
     */
    onChange?: (date: number) => void;
    /**
     * Дополнительный контент под числом
     */
    dayAddons?: DayAddons[];
};
export declare function useCalendar({ defaultMonth, month, minDate, view, maxDate, selected, events, offDays, holidays, dayAddons, onMonthChange, onChange, }: UseCalendarProps): {
    activeMonth: Date;
    weeks: Day[][];
    months: Month[];
    years: Date[];
    canSetPrevMonth: boolean;
    canSetNextMonth: boolean;
    highlighted: number | Date | undefined;
    setPrevMonth: () => void;
    setNextMonth: () => void;
    setMonthByDate: (newMonth: Date) => void;
    getDayProps: (day: Day) => {
        'data-date': number;
        'aria-selected': boolean | undefined;
        ref: (node: HTMLTableDataCellElement) => void;
        tabIndex: number;
        onMouseEnter: () => void;
        onMouseLeave: () => void;
        onClick: (event: MouseEvent<HTMLTableDataCellElement>) => void;
    };
    getMonthProps: (currMonth: Month) => {
        'data-date': number;
        'aria-selected': boolean;
        ref: (node: HTMLButtonElement) => void;
        tabIndex: number;
        disabled: boolean | undefined;
        onClick: (event: MouseEvent<HTMLButtonElement>) => void;
    };
    getYearProps: (year: Date) => {
        'data-date': number;
        'aria-selected': boolean;
        ref: (node: HTMLButtonElement) => void;
        tabIndex: number;
        onClick: (event: MouseEvent<HTMLButtonElement>) => void;
    };
    getRootProps: ({ ref }: {
        ref?: Ref<HTMLDivElement>;
    }) => {
        onKeyDown: (event: KeyboardEvent<HTMLDivElement>) => void;
        ref: (instance: HTMLDivElement | null) => void | import("react").DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES[keyof import("react").DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES];
        tabIndex: number;
    };
};
