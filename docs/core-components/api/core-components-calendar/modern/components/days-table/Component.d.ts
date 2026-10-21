import React, { type FC, type RefCallback } from 'react';
import { type Day, type DayAddons } from '../../typings';
export type DaysTableProps = {
    /**
     * Массив-календарь недель
     */
    weeks?: Day[][];
    /**
     * Активный месяц
     */
    activeMonth?: Date;
    /**
     * Начало выделенного периода
     */
    selectedFrom?: Date | number;
    /**
     * Конец выделенного периода
     */
    selectedTo?: Date | number;
    /**
     * Индикатор, что выбран полный период
     */
    rangeComplete?: boolean;
    /**
     * Подсвеченная дата (ховер)
     */
    highlighted?: Date | number;
    /**
     * Доп. пропсы для переданного дня
     */
    getDayProps: (day: Day) => Record<string, unknown> & {
        ref: RefCallback<HTMLTableDataCellElement>;
        onClick: (e: React.MouseEvent<HTMLTableDataCellElement>) => void;
    };
    /**
     * Нужно ли рендерить шапку
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
     * Рендерит компонент, обернутый в Transition
     */
    withTransition?: boolean;
};
export declare const DaysTable: FC<DaysTableProps>;
