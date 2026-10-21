import { type ReactNode } from 'react';
import { type DateShift, type Day, type DayAddons, type Month, type SpecialDays, type SpecialDaysAddon } from './typings';
import { type CalendarProps } from '.';
export declare const DAYS_IN_WEEK = 7;
export declare const MONTHS_IN_YEAR = 12;
export declare const SUNDAY_INDEX = 6;
export declare const DATE_FORMAT = "dd.MM.yyyy";
export declare const NATIVE_DATE_FORMAT = "yyyy-MM-dd";
export declare const WEEKDAYS: string[];
export declare const MONTHS: string[];
/**
 * Возвращает «правильный» индекс дня недели, 0 - пн, 1 - вт и так далее.
 */
export declare function russianWeekDay(date: Date): number;
/**
 * Возвращает таблицу-календарь с заполненными датами для переданного месяца
 */
export declare function generateWeeks(month: Date, options: {
    minDate?: Date;
    maxDate?: Date;
    selected?: Date;
    eventsMap?: SpecialDays;
    offDaysMap?: SpecialDays;
    holidaysMap?: SpecialDays;
    dayAddonsMap?: SpecialDaysAddon;
}): Day[][];
/**
 * Возвращает массив с месяцами для переданного года
 */
export declare function generateMonths(year: Date, options: {
    minMonth?: Date;
    maxMonth?: Date;
    offDaysMap?: Record<number, boolean>;
}): Month[];
/**
 * Возвращает массив лет от minYear до maxYear
 */
export declare function generateYears(minYear: Date, maxYear: Date): Date[];
/**
 * Добавляет метаданные для переданного дня
 */
export declare function buildDay(day: Date, options: {
    minDate?: Date;
    maxDate?: Date;
    selected?: Date;
    eventsMap?: SpecialDays;
    offDaysMap?: SpecialDays;
    holidaysMap?: SpecialDays;
    dayAddonsMap?: SpecialDaysAddon;
}): Day;
/**
 * Проверяет, все ли дни месяца находятся в offDaysMap
 */
export declare function isMonthFullyDisabled(month: Date, offDaysMap: Record<number, boolean>): boolean;
/**
 * Добавляет метаданные для переданного месяца
 */
export declare function buildMonth(month: Date, options: {
    minMonth?: Date;
    maxMonth?: Date;
    offDaysMap?: Record<number, boolean>;
}): Month;
/**
 * Ограничивает дату на отрезке [minDate, maxDate]
 */
export declare function limitDate(date: Date | number, minDate?: Date | number, maxDate?: Date | number): Date;
/**
 * Проверяет, находится ли переданная дата в указанных границах
 */
export declare function dateInLimits(date?: Date | number | null, minDate?: Date | number, maxDate?: Date | number): boolean | 0 | null | undefined;
/**
 * Возвращает русское название месяца с большой буквы
 */
export declare function monthName(month: Date): string;
/**
 * Превращает массив в объект, у которого ключи составляются из элементов массива
 */
export declare function dateArrayToHashTable(arr: Array<Date | number>): Record<number, boolean>;
export declare function addonArrayToHashTable(arr: DayAddons[]): Record<number, ReactNode>;
/**
 * Возвращает корректный отрезок дат для выделения
 */
export declare function getSelectionRange(from?: Date | number, to?: Date | number, highlighted?: Date | number): {
    start: Date;
    end: Date;
} | null;
export declare function modifyDateByShift(shift: DateShift, date: Date, minDate?: Date, maxDate?: Date, offDaysMap?: Record<number, boolean>): Date;
/**
 * Если дата была выбрана мышкой — фокусную обводку не видно
 * TODO: добавить в useFocus возможность переключать метод ввода программно
 */
export declare function simulateTab(node: HTMLElement): void;
export declare const formatDate: (date: Date | number, dateFormat?: string) => string;
export declare const parseDateString: (value: string, dateFormat?: string) => Date;
export declare function getCalendarMobileTestIds(dataTestId: string): {
    calendar: string;
    content: string;
    footer: string;
    header: string;
    closer: string;
    btnApply: string;
    btnReset: string;
    btnNextDate: string;
    btnPreviousDate: string;
};
export declare function isRangeValue(value: CalendarProps['value']): value is {
    dateFrom?: number | undefined;
    dateTo?: number | undefined;
};
export declare const getMonthStartTimestamp: (date: Date) => number;
export declare const getMonthEndTimestamp: (date: Date) => number;
