import React, { type ReactNode } from 'react';
type Props = {
    /**
     * Наименование категории
     */
    categoryName: string;
    /**
     * Процент категории
     */
    categoryPercent?: number;
    /**
     * Слот справа
     */
    rightAddons?: ReactNode;
    /**
     * Идентификатор для систем автоматизированного тестирования.
     * Для наименования категории используется модификатор -category-name,
     * процент категории -category-percent, слота справа -category-right-addon
     */
    dataTestId?: string;
};
export declare const Category: React.FC<Props>;
export {};
