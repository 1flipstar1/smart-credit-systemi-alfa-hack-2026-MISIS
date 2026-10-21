import React, { type HTMLAttributes } from 'react';
export type THeadProps = HTMLAttributes<HTMLTableSectionElement> & {
    /**
     * Дополнительный класс
     */
    className?: string;
    /**
     * Дополнительный класс для tr
     */
    rowClassName?: string;
    /**
     * Идентификатор для систем автоматизированного тестирования
     */
    dataTestId?: string;
};
export declare const THead: React.FC<THeadProps>;
