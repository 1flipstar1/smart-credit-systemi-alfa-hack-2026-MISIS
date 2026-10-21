import React from 'react';
import { type Color } from '@alfalab/core-components-typography/moderncssm';
import { type AmountProps as AmountType } from '../typesProps';
type Props = {
    /**
     * Начертание шрифта денежного значения
     */
    weight?: 'bold' | 'normal';
    /**
     * Размер денежного значения
     */
    textView?: 'component-primary' | 'primary-small';
    /**
     * Цвет денежного значения
     */
    color?: Color;
    /**
     * Скрыть денежное значение
     */
    hidden?: boolean;
    /**
     * Идентификатор для систем автоматизированного тестирования.
     * Для typography используется модификатор -amount-text, для компонента Amount -amount
     */
    dataTestId?: string;
} & Omit<AmountType, 'dataTestId'>;
export declare const Amount: React.FC<Props>;
export {};
