import React, { type HTMLAttributes } from 'react';
export type TBodyProps = HTMLAttributes<HTMLTableSectionElement> & {
    /**
     * Дополнительный класс
     */
    className?: string;
    /**
     * Идентификатор для систем автоматизированного тестирования
     */
    dataTestId?: string;
};
export declare const TBody: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLTableSectionElement> & {
    /**
     * Дополнительный класс
     */
    className?: string;
    /**
     * Идентификатор для систем автоматизированного тестирования
     */
    dataTestId?: string;
} & React.RefAttributes<HTMLTableSectionElement>>;
