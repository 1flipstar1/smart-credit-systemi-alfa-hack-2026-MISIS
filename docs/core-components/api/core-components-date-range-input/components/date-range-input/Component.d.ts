import React, { type ChangeEvent, type ElementType } from 'react';
import { type CalendarDesktopProps } from '@alfalab/core-components-calendar/desktop';
import { type CalendarMobileProps } from '@alfalab/core-components-calendar/mobile';
import { type InputProps } from '@alfalab/core-components-input';
import { type PopoverProps } from '@alfalab/core-components-popover';
export type ConditionalProps = {
    /**
     * Обработчик изменения значения
     */
    picker: true;
    /**
     * Обработчик закрытия календаря
     */
    onClose?: () => void;
} | {
    picker?: false;
    onClose?: never;
};
export type DateRangeInputProps = Omit<InputProps, 'onChange'> & ConditionalProps & {
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
     * Обработчик изменения значения
     */
    onChange?: (payload: {
        dateFrom?: Date;
        dateTo?: Date;
        value: string;
    }, event?: ChangeEvent<HTMLInputElement>) => void;
    /**
     * Обработчик окончания ввода
     */
    onComplete?: (payload: {
        dateFrom: Date;
        dateTo: Date;
        value: string;
    }, event?: ChangeEvent<HTMLInputElement>) => void;
    /**
     * Компонент календаря
     */
    Calendar?: ElementType;
    /**
     * Доп. пропсы для календаря
     */
    calendarProps?: (CalendarDesktopProps & Record<string, unknown>) | (CalendarMobileProps & Record<string, unknown>);
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
     * Состояние открытия по умолчанию
     */
    defaultOpen?: boolean;
    /**
     * Позиционирование поповера с календарем
     */
    popoverPosition?: PopoverProps['position'];
    /**
     * z-index Popover
     */
    zIndexPopover?: PopoverProps['zIndex'];
    /**
     * Запрещает поповеру менять свою позицию.
     * Например, если места снизу недостаточно, то он все равно будет показан снизу
     */
    preventFlip?: boolean;
    /**
     * Календарь будет принимать ширину инпута
     */
    useAnchorWidth?: boolean;
    /**
     * Растягивает компонент на ширину контейнера
     */
    block?: boolean;
    /**
     * Отображение компонента в мобильном или десктопном виде
     */
    view?: 'desktop' | 'mobile';
    /**
     * Компонент инпута
     */
    InputComponent?: ElementType;
    /**
     * Запретить ввод с клавиатуры
     */
    disableUserInput?: boolean;
};
export declare const DateRangeInput: React.ForwardRefExoticComponent<DateRangeInputProps & React.RefAttributes<HTMLInputElement>>;
