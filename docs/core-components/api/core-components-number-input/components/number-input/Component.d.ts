import React, { type ChangeEvent, type ForwardRefExoticComponent, type RefAttributes } from 'react';
import { type InputProps } from '@alfalab/core-components-input';
export interface NumberInputProps extends Omit<InputProps, 'value' | 'onChange' | 'type' | 'defaultValue' | 'dataTestId'> {
    /**
     * Значение поля ввода
     */
    value?: string | number | null;
    /**
     *  Значение по-умолчанию
     */
    defaultValue?: string | number | null;
    /**
     * Разделитель ',' или '.'
     */
    separator?: '.' | ',';
    /**
     * Количество символов после разделителя
     * Если указан проп step, то всегда 0
     */
    fractionLength?: number;
    /**
     *  Шаг инкремента/декремента. Используйте только целочисленные значения
     */
    step?: number;
    /**
     * Минимальное значение
     * @default Number.MIN_SAFE_INTEGER
     */
    min?: number;
    /**
     * Максимальное значение
     * @default Number.MAX_SAFE_INTEGER
     */
    max?: number;
    /**
     * Отображение компонента в мобильном или десктопном виде
     */
    view?: 'desktop' | 'mobile';
    /**
     *  Компонент инпута
     */
    Input: ForwardRefExoticComponent<InputProps & RefAttributes<HTMLInputElement>>;
    /**
     * Обработчик события изменения значения
     */
    onChange?: (e: ChangeEvent<HTMLInputElement> | null, payload: {
        value: number | null;
    }) => void;
    /**
     * Идентификатор для систем автоматизированного тестирования.
     * Для кнопки инкремента используется модификатор -increment-button, декремента -decrement-button
     */
    dataTestId?: string;
}
export declare const NumberInput: React.ForwardRefExoticComponent<NumberInputProps & React.RefAttributes<HTMLInputElement>>;
