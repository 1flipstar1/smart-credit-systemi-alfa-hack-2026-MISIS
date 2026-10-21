import React, { type MouseEvent } from 'react';
import { type DayAddons, type SelectorView, type View } from '../typings';
export type CalendarDesktopProps = {
    /**
     * Дополнительный класс
     */
    className?: string;
    /**
     * Дополнительный класс шапки десктопного календаря
     */
    headerClassName?: string;
    /**
     * Дополнительный класс контента десктопного календаря
     */
    contentClassName?: string;
    /**
     * Вид по умолчанию (выбор дней, месяцев, лет)
     */
    defaultView?: View;
    /**
     * Вид шапки — месяц и год или только месяц
     */
    selectorView?: SelectorView;
    /**
     * Выбранная дата (timestamp)
     */
    value?: number | {
        dateFrom?: number;
        dateTo?: number;
    };
    /**
     * Режим выбора дат
     * @default single
     */
    mode?: 'single' | 'range';
    /**
     * Тип выбора границ в календаре
     * @default clarification
     */
    rangeBehavior?: 'clarification' | 'reset';
    /**
     * Открытый месяц (timestamp)
     */
    month?: number;
    /**
     * Месяц, открытый по умолчанию (timestamp)
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
     * Начало выделенного периода (timestamp)
     * @deprecated используйте value вместе с mode='range'
     */
    selectedFrom?: number;
    /**
     * Конец выделенного периода (timestamp)
     * @deprecated используйте value вместе с mode='range'
     */
    selectedTo?: number;
    /**
     * Индикатор, что выбран полный период
     */
    rangeComplete?: boolean;
    /**
     * Список событий
     */
    events?: Array<Date | number>;
    /**
     * Список отключенных для выбора дней.
     */
    offDays?: Array<Date | number>;
    /**
     * Список выходных
     */
    holidays?: Array<Date | number>;
    /**
     * Обработчик изменения месяца (или года)
     */
    onMonthChange?: (month: number) => void;
    /**
     * Обработчик выбора даты
     */
    onChange?: (date?: number, dateTo?: number) => void;
    /**
     * Обработчик нажатия на кнопку месяца
     */
    onMonthClick?: (event: MouseEvent<HTMLButtonElement>) => void;
    /**
     * Обработчик нажатия на кнопку года
     */
    onYearClick?: (event: MouseEvent<HTMLButtonElement>) => void;
    /**
     * Обработчик нажатия на период
     */
    onPeriodClick?: (event: MouseEvent<HTMLAnchorElement>) => void;
    /**
     * Идентификатор для систем автоматизированного тестирования
     */
    dataTestId?: string;
    /**
     * Нужно ли рендерить шапку календаря
     */
    hasHeader?: boolean;
    /**
     * Должен ли календарь подстраиваться под ширину родителя.
     */
    responsive?: boolean;
    /**
     * Дополнительный контент под числом
     */
    dayAddons?: DayAddons[];
    /**
     * Форма ячейки дня
     */
    shape?: 'rounded' | 'rectangular';
    /**
     * Отображать ли текущий год, если selectorView 'month-only'
     * @default false
     */
    showCurrentYearSelector?: boolean;
    /**
     * Скрывает заблокированные кнопки в периоде, если selectorView 'month-only'
     * @default true
     */
    hideDisabledArrows?: boolean;
    /**
     * CalendarDesktop используется в мобильной и десктопной версии
     * Пропс позволяет определить платформу
     */
    mobile?: boolean;
};
export declare const CalendarDesktop: React.ForwardRefExoticComponent<CalendarDesktopProps & React.RefAttributes<HTMLDivElement>>;
