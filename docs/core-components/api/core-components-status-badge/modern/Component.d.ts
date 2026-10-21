import React from 'react';
import { type StatusBadgeCustomIcon, type StatusBadgeSizes, type StatusBadgeViews } from './types/statusBadgePropTypes';
export type StatusBadgeProps = {
    /**
     * Дополнительный класс
     */
    className?: string;
    /**
     * Размер компонента
     * @default 24
     */
    size?: StatusBadgeSizes;
    /**
     * Набор цветов для компонента
     */
    colors?: 'default' | 'inverted';
    /**
     * Вид бейджа.
     */
    view: StatusBadgeViews;
    /**
     * Идентификатор для систем автоматизированного тестирования
     */
    dataTestId?: string;
    /**
     * Кастомные иконки
     */
    customIcons?: StatusBadgeCustomIcon;
};
export declare const StatusBadge: ({ className, dataTestId, size, view, colors, customIcons, }: StatusBadgeProps) => React.JSX.Element;
