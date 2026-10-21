import React, { type ReactElement } from 'react';
type Border = {
    width?: number;
    color?: string;
    style?: 'solid' | 'dashed' | 'dotted';
};
export type IndicatorProps = React.HTMLAttributes<HTMLDivElement> & {
    /**
     * Значение индикатора
     */
    value?: number | ReactElement;
    /**
     * Цвет значения
     */
    color?: string;
    /**
     * Цвет заливки
     */
    backgroundColor?: string;
    /**
     * Высота компонента, min = 16; max = 48
     */
    height?: number;
    /**
     * Размер компонента
     */
    size?: 8 | 16 | 20 | 24 | 32 | 40;
    /**
     * Настройки обводки
     */
    border?: boolean | Border;
    /**
     * Пресет компонента
     */
    view?: 'red' | 'grey' | 'white';
    /**
     * Дополнительный класс
     */
    className?: string;
    /**
     * Идентификатор для систем автоматизированного тестирования
     */
    dataTestId?: string;
};
export declare const Indicator: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLDivElement> & {
    /**
     * Значение индикатора
     */
    value?: number | ReactElement;
    /**
     * Цвет значения
     */
    color?: string;
    /**
     * Цвет заливки
     */
    backgroundColor?: string;
    /**
     * Высота компонента, min = 16; max = 48
     */
    height?: number;
    /**
     * Размер компонента
     */
    size?: 8 | 16 | 20 | 24 | 32 | 40;
    /**
     * Настройки обводки
     */
    border?: boolean | Border;
    /**
     * Пресет компонента
     */
    view?: "red" | "grey" | "white";
    /**
     * Дополнительный класс
     */
    className?: string;
    /**
     * Идентификатор для систем автоматизированного тестирования
     */
    dataTestId?: string;
} & React.RefAttributes<HTMLDivElement>>;
export {};
