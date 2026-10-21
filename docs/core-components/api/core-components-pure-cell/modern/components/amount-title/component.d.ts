import React from 'react';
import { type TitleProps } from '@alfalab/core-components-typography/modern';
import { type AmountProps as AmountType } from '../typesProps';
type Props = {
    /**
     * Пропсы, которые будут прокинуты в компонент типографики
     */
    titleProps?: TitleProps;
    /**
     * Скрыть денежное значение
     */
    hidden?: boolean;
    /**
     * Идентификатор для систем автоматизированного тестирования.
     * Для typography используется модификатор -amount-title, для компонента Amount -core-amount-title
     */
    dataTestId?: string;
} & Omit<AmountType, 'dataTestId'>;
export declare const AmountTitle: React.FC<Props>;
export {};
