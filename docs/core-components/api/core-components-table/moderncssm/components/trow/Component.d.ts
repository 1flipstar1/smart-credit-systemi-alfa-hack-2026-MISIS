import React, { type HTMLAttributes } from 'react';
import { type TCell, type TCellProps } from '../tcell';
type TCellElement = React.ReactElement<TCellProps, typeof TCell>;
export type TRowProps = HTMLAttributes<HTMLTableRowElement> & {
    /**
     * Компоненты ячеек
     */
    children: TCellElement | TCellElement[];
    /**
     * Дополнительный класс
     */
    className?: string;
    /**
     * Стиль выбранной строки
     */
    selected?: boolean;
    /**
     * Убирает нижнюю границу
     */
    withoutBorder?: boolean;
    /**
     * Идентификатор для систем автоматизированного тестирования
     */
    dataTestId?: string;
};
export declare const TRow: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLTableRowElement> & {
    /**
     * Компоненты ячеек
     */
    children: TCellElement | TCellElement[];
    /**
     * Дополнительный класс
     */
    className?: string;
    /**
     * Стиль выбранной строки
     */
    selected?: boolean;
    /**
     * Убирает нижнюю границу
     */
    withoutBorder?: boolean;
    /**
     * Идентификатор для систем автоматизированного тестирования
     */
    dataTestId?: string;
} & React.RefAttributes<HTMLTableRowElement>>;
export {};
