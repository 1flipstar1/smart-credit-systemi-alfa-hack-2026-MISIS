import React from 'react';
import { type BackgroundColorType, type GraphicColorType } from '@alfalab/core-components-types/modern';
export type IconColorType = Extract<GraphicColorType, 'positive' | 'attention' | 'link' | 'negative' | 'tertiary' | 'secondary' | 'primary'>;
export type BadgeProps = {
    /**
     * Дополнительный класс
     */
    className?: string;
    /**
     *  Вид компонента
     */
    view: 'icon' | 'count';
    /**
     * Размер компонента (только для view=icon)
     * //deprecated(используйте height для view=count )
     */
    size?: 's' | 'm' | 'l' | 'xl';
    /**
     *  Видимость белой обводки вокруг иконки
     */
    visibleIconOutline?: boolean;
    /**
     *  Видимость цветной обводки вокруг иконки (только для view=icon)
     */
    visibleColorOutline?: boolean;
    /**
     * Контент компонента
     */
    content?: React.ReactElement | number;
    /**
     * Высота компонента, min = 16; max = 48 (только для view=count)
     */
    height?: number;
    /**
     * Цветовое оформление бейджа при view='count'
     */
    color?: Extract<BackgroundColorType, 'accent' | 'primary' | 'specialbg-secondary-transparent'>;
    /**
     * Цветовое оформление бейджа при view='icon'
     */
    iconColor?: IconColorType;
    /**
     * Цвет подложки под иконкой
     */
    iconUnderlayColor?: Extract<GraphicColorType, 'primary' | 'static-light'>;
    /**
     * Идентификатор для систем автоматизированного тестирования
     */
    dataTestId?: string;
};
/**
 * @deprecated Используйте StatusBadge или Indicator
 */
export declare const Badge: ({ className, size, view, visibleIconOutline, visibleColorOutline, content, height, iconColor, color, iconUnderlayColor, dataTestId, }: BadgeProps) => React.JSX.Element;
