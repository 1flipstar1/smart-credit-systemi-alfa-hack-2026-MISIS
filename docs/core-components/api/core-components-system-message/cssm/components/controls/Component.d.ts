import React from 'react';
import { type PaddingType } from '@alfalab/core-components-types/cssm';
type ControlsProps = {
    /**
     * Расположение элементов футера
     */
    direction?: 'column' | 'row';
    /**
     * Дополнительный класс
     */
    className?: string;
    /**
     * Дочерние элементы
     */
    children: React.ReactNode;
    /**
     * Отступы
     */
    padding?: PaddingType;
};
export declare const Controls: React.FC<ControlsProps>;
export {};
