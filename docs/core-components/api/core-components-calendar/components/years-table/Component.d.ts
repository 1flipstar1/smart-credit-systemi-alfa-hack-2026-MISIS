import { type FC } from 'react';
export type YearsTableProps = {
    /**
     * Массив лет
     */
    years?: Date[];
    /**
     * Выбранный год
     */
    selectedYear?: Date;
    /**
     * Доп. пропсы для переданного года
     */
    getYearProps: (year: Date) => Record<string, unknown>;
    /**
     * Должен ли календарь подстраиваться под ширину родителя.
     */
    responsive?: boolean;
};
export declare const YearsTable: FC<YearsTableProps>;
