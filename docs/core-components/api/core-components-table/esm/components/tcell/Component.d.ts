import React, { type TdHTMLAttributes } from 'react';
export type TCellProps = TdHTMLAttributes<HTMLTableCellElement> & {
    /**
     * Дополнительный класс
     */
    className?: string;
    /**
     * Идентификатор для систем автоматизированного тестирования
     */
    dataTestId?: string;
    /**
     * Устанавливается автоматически и позволяет использовать конфиг для соответствующего индекса
     */
    index?: number;
};
export declare const TCell: ({ className, style, dataTestId, children, index, ...restProps }: TCellProps) => React.JSX.Element | null;
