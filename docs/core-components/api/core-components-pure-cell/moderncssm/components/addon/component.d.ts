import React from 'react';
import { type AddonElement } from '../types';
type Props = {
    /**
     * Вертикальное выравнивание
     */
    verticalAlign?: 'auto' | 'top' | 'center' | 'bottom';
    /**
     * Горизонтальные отступы
     */
    addonPadding?: 'default' | 'none';
    /**
     * Компоненты
     */
    children: AddonElement;
    /**
     * Идентификатор для систем автоматизированного тестирования.
     * Используется модификатор -addon
     */
    dataTestId?: string;
    /**
     * Клик по контенту аддона.
     */
    onClick?: () => void;
};
export declare const Addon: React.FC<Props>;
export {};
