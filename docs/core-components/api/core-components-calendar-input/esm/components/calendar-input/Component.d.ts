import React, { type ChangeEvent, type ElementType, type MouseEvent } from 'react';
import { type CalendarDesktopProps } from '@alfalab/core-components-calendar/esm/desktop';
import { type CalendarMobileProps } from '@alfalab/core-components-calendar/esm/mobile';
import { type DateInputProps } from '@alfalab/core-components-date-input/esm';
import { type PopoverProps } from '@alfalab/core-components-popover/esm';
export type CalendarInputProps = Omit<DateInputProps, 'onChange' | 'mobileMode'> & {
    /**
     * Дополнительный класс
     */
    className?: string;
    /**
     * Дополнительный класс для инпута
     */
    inputClassName?: string;
    /**
     * Дополнительный класс для поповера
     */
    popoverClassName?: string;
    /**
     * Доп. пропсы для календаря
     */
    calendarProps?: (CalendarDesktopProps & Record<string, unknown>) | (CalendarMobileProps & Record<string, unknown>);
    /**
     * Значение инпута (используется и для календаря)
     */
    value?: string;
    /**
     * Начальное значение инпута
     */
    defaultValue?: string;
    /**
     * Состояние открытия по умолчанию
     */
    defaultOpen?: boolean;
    /**
     * Месяц в календаре по умолчанию (timestamp)
     */
    defaultMonth?: number;
    /**
     * Минимальная дата, доступная для выбора (timestamp)
     */
    minDate?: number;
    /**
     * Максимальная дата, доступная для выбора (timestamp)
     */
    maxDate?: number;
    /**
     * Список событий
     */
    events?: Array<Date | number>;
    /**
     * Список выходных
     */
    offDays?: Array<Date | number>;
    /**
     * Определяет, как рендерить календарь — в поповере или снизу инпута
     */
    calendarPosition?: 'static' | 'popover';
    /**
     * Запрещает поповеру менять свою позицию.
     * Например, если места снизу недостаточно,то он все равно будет показан снизу
     */
    preventFlip?: boolean;
    /**
     * Управление нативным режимом на мобильных устройствах
     */
    mobileMode?: 'native' | 'popover' | 'input';
    /**
     * Компонент календаря
     */
    Calendar?: ElementType;
    /**
     * Обработчик изменения значения
     */
    onChange?: (event: ChangeEvent<HTMLInputElement> | MouseEvent<HTMLButtonElement> | null, payload: {
        date: Date;
        value: string;
    }) => void;
    /**
     * Обработчик ввода в инпут
     */
    onInputChange?: (event: ChangeEvent<HTMLInputElement>, payload: {
        value: string;
        date: Date;
    }) => void;
    /**
     * Обработчик изменения календаря
     */
    onCalendarChange?: CalendarDesktopProps['onChange'];
    /**
     *  Обработчик открытия календаря
     */
    onCalendarOpen?: () => void;
    /**
     *  Обработчик закрытия календаря
     */
    onCalendarClose?: () => void;
    /**
     * Позиционирование поповера с календарем
     */
    popoverPosition?: PopoverProps['position'];
    /**
     * z-index Popover
     */
    zIndexPopover?: PopoverProps['zIndex'];
    /**
     * Календарь будет принимать ширину инпута
     */
    useAnchorWidth?: boolean;
    /**
     * Отображение компонента в мобильном или десктопном виде
     */
    view?: 'desktop' | 'mobile';
    /**
     * Запретить ввод с клавиатуры
     */
    disableUserInput?: boolean;
};
export declare const CalendarInput: React.ForwardRefExoticComponent<Omit<DateInputProps, "onChange" | "mobileMode"> & {
    /**
     * Дополнительный класс
     */
    className?: string;
    /**
     * Дополнительный класс для инпута
     */
    inputClassName?: string;
    /**
     * Дополнительный класс для поповера
     */
    popoverClassName?: string;
    /**
     * Доп. пропсы для календаря
     */
    calendarProps?: (CalendarDesktopProps & Record<string, unknown>) | (CalendarMobileProps & Record<string, unknown>);
    /**
     * Значение инпута (используется и для календаря)
     */
    value?: string;
    /**
     * Начальное значение инпута
     */
    defaultValue?: string;
    /**
     * Состояние открытия по умолчанию
     */
    defaultOpen?: boolean;
    /**
     * Месяц в календаре по умолчанию (timestamp)
     */
    defaultMonth?: number;
    /**
     * Минимальная дата, доступная для выбора (timestamp)
     */
    minDate?: number;
    /**
     * Максимальная дата, доступная для выбора (timestamp)
     */
    maxDate?: number;
    /**
     * Список событий
     */
    events?: Array<Date | number>;
    /**
     * Список выходных
     */
    offDays?: Array<Date | number>;
    /**
     * Определяет, как рендерить календарь — в поповере или снизу инпута
     */
    calendarPosition?: "static" | "popover";
    /**
     * Запрещает поповеру менять свою позицию.
     * Например, если места снизу недостаточно,то он все равно будет показан снизу
     */
    preventFlip?: boolean;
    /**
     * Управление нативным режимом на мобильных устройствах
     */
    mobileMode?: "native" | "popover" | "input";
    /**
     * Компонент календаря
     */
    Calendar?: ElementType;
    /**
     * Обработчик изменения значения
     */
    onChange?: (event: ChangeEvent<HTMLInputElement> | MouseEvent<HTMLButtonElement> | null, payload: {
        date: Date;
        value: string;
    }) => void;
    /**
     * Обработчик ввода в инпут
     */
    onInputChange?: (event: ChangeEvent<HTMLInputElement>, payload: {
        value: string;
        date: Date;
    }) => void;
    /**
     * Обработчик изменения календаря
     */
    onCalendarChange?: CalendarDesktopProps["onChange"];
    /**
     *  Обработчик открытия календаря
     */
    onCalendarOpen?: () => void;
    /**
     *  Обработчик закрытия календаря
     */
    onCalendarClose?: () => void;
    /**
     * Позиционирование поповера с календарем
     */
    popoverPosition?: PopoverProps["position"];
    /**
     * z-index Popover
     */
    zIndexPopover?: PopoverProps["zIndex"];
    /**
     * Календарь будет принимать ширину инпута
     */
    useAnchorWidth?: boolean;
    /**
     * Отображение компонента в мобильном или десктопном виде
     */
    view?: "desktop" | "mobile";
    /**
     * Запретить ввод с клавиатуры
     */
    disableUserInput?: boolean;
} & React.RefAttributes<HTMLInputElement>>;
