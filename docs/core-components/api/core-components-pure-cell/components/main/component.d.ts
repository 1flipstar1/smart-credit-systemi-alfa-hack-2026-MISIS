import React from 'react';
import { type MainElement } from '../types';
type Props = {
    /**
     * Компоненты
     */
    children: MainElement;
    /**
     * Позволяет изменить расположение блоков внутри main
     */
    isReverse?: boolean;
    /**
     * Дополнительный класс
     */
    className?: string;
    /**
     * Идентификатор для систем автоматизированного тестирования.
     * Используется модификатор -main
     */
    dataTestId?: string;
    /**
     * Клик по контенту.
     */
    onClick?: () => void;
};
export declare const Main: React.FC<Props>;
export {};
