import React, { type ThHTMLAttributes } from 'react';
import { type TextAlignProperty } from '../../typings';
export type THeadCellProps = ThHTMLAttributes<HTMLHeadingElement> & {
    /**
     * Дополнительный класс
     */
    className?: string;
    /**
     * Ширина колонки
     */
    width?: string | number;
    /**
     * Скрытие колонки
     */
    hidden?: boolean;
    /**
     * Выравнивание текста в колонке
     */
    textAlign?: TextAlignProperty;
    /**
     * Идентификатор для систем автоматизированного тестирования
     */
    dataTestId?: string;
};
export declare const THeadCell: ({ children, className, dataTestId, style, width, textAlign, hidden, ...restProps }: THeadCellProps) => React.JSX.Element | null;
