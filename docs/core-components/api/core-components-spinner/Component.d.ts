import React, { type FC } from 'react';
export type SpinnerProps = {
    /**
     * Палитра, в контексте которой используется спиннер
     * @default default
     */
    colors?: 'default' | 'inverted';
    /**
     * Управление видимостью компонента
     * @default false
     */
    visible?: boolean;
    /**
     * Дополнительный класс
     */
    className?: string;
    /**
     * Идентификатор компонента в DOM
     */
    id?: string;
    /**
     * Идентификатор для систем автоматизированного тестирования
     */
    dataTestId?: string;
    /**
     * Дополнительные инлайн стили для cпиннера
     */
    style?: React.CSSProperties;
} & ({
    /**
     * Размер спиннера (кольца)
     */
    size: number;
    /**
     * Толщина линии спинера (кольца)
     */
    lineWidth: number;
} | {
    /**
     * Преднастроенный вариант
     */
    preset: 16 | 24 | 48;
});
export declare const Spinner: FC<SpinnerProps>;
