import React, { type ReactNode } from 'react';
export type BorderRadiusSize = 0 | 2 | 4 | 6 | 8 | 10 | 12 | 16 | 20 | 24 | 32 | 36 | 64 | 'pill';
export type SkeletonProps = {
    /**
     * Флаг, явно задающий состояние, при котором контент закрывается прелоадером
     */
    visible?: boolean;
    /**
     * Флаг явного включения анимации скелета
     */
    animate?: boolean;
    /**
     * Дополнительный класс
     */
    className?: string;
    /**
     * Дополнительные инлайн стили
     */
    style?: React.CSSProperties;
    /**
     * Включает размытие фона
     */
    allowBackdropBlur?: boolean;
    /**
     * Идентификатор для систем автоматизированного тестирования
     */
    dataTestId?: string;
    /**
     * Дочерние элементы.
     */
    children?: ReactNode;
    /**
     * Набор цветов для компонента
     * @default default
     */
    colors?: 'default' | 'inverted';
    /**
     * Скругление углов
     * @default 8
     */
    borderRadius?: BorderRadiusSize;
};
export declare const Skeleton: React.FC<SkeletonProps>;
