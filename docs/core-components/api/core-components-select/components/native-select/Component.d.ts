import React, { type SelectHTMLAttributes } from 'react';
import { type GroupShape, type OptionShape } from '../../typings';
export type NativeSelectProps = SelectHTMLAttributes<HTMLSelectElement> & {
    /**
     * Список вариантов выбора
     */
    options: Array<OptionShape | GroupShape>;
    /**
     * Значение селекта
     */
    value: string | string[];
};
export declare const NativeSelect: React.ForwardRefExoticComponent<React.SelectHTMLAttributes<HTMLSelectElement> & {
    /**
     * Список вариантов выбора
     */
    options: Array<OptionShape | GroupShape>;
    /**
     * Значение селекта
     */
    value: string | string[];
} & React.RefAttributes<HTMLSelectElement>>;
