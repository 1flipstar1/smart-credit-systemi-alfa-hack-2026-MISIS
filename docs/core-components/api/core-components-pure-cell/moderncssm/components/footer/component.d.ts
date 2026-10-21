import React from 'react';
import { type FooterElement } from '../types';
type Props = {
    /**
     * Компоненты
     */
    children: FooterElement;
    /**
     * Вертикальные отступы
     */
    footerPadding?: 'default' | 'none';
    /**
     * Идентификатор для систем автоматизированного тестирования.
     * Используется модификатор -footer
     */
    dataTestId?: string;
    /**
     * Дополнительный класс
     */
    className?: string;
};
export declare const Footer: React.FC<Props>;
export {};
