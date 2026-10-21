import { type FC } from 'react';
import { type Month } from '../../typings';
export type MonthsTableProps = {
    /**
     * Массив месяцев
     */
    months?: Month[];
    /**
     * Выбранный месяц
     */
    selectedMonth?: Date;
    /**
     * Доп пропсы для переданного месяца
     */
    getMonthProps: (day: Month) => Record<string, unknown>;
    /**
     * Должен ли календарь подстраиваться под ширину родителя.
     */
    responsive?: boolean;
};
export declare const MonthsTable: FC<MonthsTableProps>;
