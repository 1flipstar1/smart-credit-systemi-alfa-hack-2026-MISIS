import React, { type ReactNode } from 'react';
import { type Color } from '@alfalab/core-components-typography';
type Props = {
    /**
     * Контент
     */
    children?: ReactNode;
    /**
     * Количество строк
     */
    rowLimit?: 1 | 2;
    /**
     * Размер текста
     */
    view?: 'primary-large' | 'primary-medium' | 'primary-small' | 'component-primary' | 'component-secondary' | 'secondary-large';
    /**
     * Толщина title
     */
    titleWeight?: 'regular' | 'bold';
    /**
     * Цвет title
     */
    titleColor: Color;
    /**
     * Value ячейки
     */
    value?: ReactNode;
    /**
     * Цвет value
     */
    valueColor?: Color;
    /**
     * Идентификатор для систем автоматизированного тестирования.
     * Для контента используется модификатор -text_content, для value ячейки -text_value
     */
    dataTestId?: string;
};
export declare const Text: React.FC<Props>;
export {};
