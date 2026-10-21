import React from 'react';
import { type TextareaIncomeProps } from '../typings';
export declare const PseudoTextArea: React.ForwardRefExoticComponent<{
    /**
     * Дополнительный класс компонента
     */
    pseudoTextareaClassName?: string;
    /**
     * Значение PseudoTextArea, разделяется на 2 части по maxLength
     */
    value: string;
    /**
     * Максимальное количество символов, символы свыше maxLength будут выделены
     */
    maxLength: number;
} & Pick<TextareaIncomeProps, "size"> & React.RefAttributes<HTMLDivElement>>;
