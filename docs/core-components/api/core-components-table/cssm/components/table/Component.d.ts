import React, { type ReactNode, type TableHTMLAttributes } from 'react';
export type TableProps = TableHTMLAttributes<HTMLTableElement> & {
    /**
     * Компактный вид
     */
    compactView?: boolean;
    /**
     * Уменьшение горизонтальных паддингов
     */
    compactHorizontal?: boolean;
    /**
     * Дополнительный класс
     */
    className?: string;
    /**
     * Дочерние компоненты
     */
    children: React.ReactElement | React.ReactElement[];
    /**
     * Оборачивает таблицу в стилизованный контейнер
     */
    wrapper?: boolean;
    /**
     * Слот для пагинации
     */
    pagination?: ReactNode;
    /**
     * Идентификатор для систем автоматизированного тестирования
     */
    dataTestId?: string;
    /**
     * Если true то заголовок будет фиксироваться при скроле
     */
    stickyHeader?: boolean;
};
export declare const Table: React.ForwardRefExoticComponent<React.TableHTMLAttributes<HTMLTableElement> & {
    /**
     * Компактный вид
     */
    compactView?: boolean;
    /**
     * Уменьшение горизонтальных паддингов
     */
    compactHorizontal?: boolean;
    /**
     * Дополнительный класс
     */
    className?: string;
    /**
     * Дочерние компоненты
     */
    children: React.ReactElement | React.ReactElement[];
    /**
     * Оборачивает таблицу в стилизованный контейнер
     */
    wrapper?: boolean;
    /**
     * Слот для пагинации
     */
    pagination?: ReactNode;
    /**
     * Идентификатор для систем автоматизированного тестирования
     */
    dataTestId?: string;
    /**
     * Если true то заголовок будет фиксироваться при скроле
     */
    stickyHeader?: boolean;
} & React.RefAttributes<HTMLTableElement>>;
