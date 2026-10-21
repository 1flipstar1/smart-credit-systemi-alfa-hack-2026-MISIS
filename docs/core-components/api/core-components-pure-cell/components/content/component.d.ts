import React from 'react';
import { type ContentElement } from '../types';
type Props = {
    /**
     * Компоненты
     */
    children: ContentElement;
    /**
     * Идентификатор для систем автоматизированного тестирования.
     * Используется модификатор -content
     */
    dataTestId?: string;
};
export declare const Content: React.FC<Props>;
export {};
