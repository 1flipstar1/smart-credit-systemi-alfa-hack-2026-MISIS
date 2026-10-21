import React from 'react';
import { type GraphicsElement } from '../types';
export type Props = {
    /**
     * Компоненты
     */
    children: GraphicsElement;
    /**
     * Идентификатор для систем автоматизированного тестирования.
     * Используется модификатор -graphics
     */
    dataTestId?: string;
    /**
     * Вертикальное выравнивание
     */
    verticalAlign?: 'top' | 'center' | 'bottom';
    /**
     * Отступ от графики
     */
    graphicPadding?: 'max' | 'airy' | 'default' | 'compact' | 'tiny' | 'none';
    /**
     * Клик по контенту графики.
     */
    onClick?: () => void;
};
export declare const Graphics: React.FC<Props>;
