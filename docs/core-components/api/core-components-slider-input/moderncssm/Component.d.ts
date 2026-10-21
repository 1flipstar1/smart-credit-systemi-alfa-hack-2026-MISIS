import React, { type ComponentType, type ReactNode } from 'react';
import { type InputProps } from '@alfalab/core-components-input/moderncssm';
import { type SliderProps } from '@alfalab/core-components-slider/moderncssm';
import { type OnChangeType, type OnInputChangeType } from './types/propTypes';
export interface SliderInputProps extends Omit<InputProps, 'min' | 'max' | 'step' | 'value' | 'type' | 'onChange' | 'bottomAddons' | 'size'> {
    /**
     * Размер компонента
     * @description s, m, l, xl deprecated, используйте вместо них 48, 56, 64, 72 соответственно
     */
    size?: Exclude<InputProps['size'], 40>;
    /**
     * Мин. допустимое число
     */
    min?: number;
    /**
     * Макс. допустимое число
     */
    max?: number;
    /**
     * Массив подписей к слайдеру
     */
    steps?: ReactNode[];
    /**
     * Шаг (должен нацело делить отрезок между мин и макс)
     */
    step?: number;
    /**
     * Отображение подписей
     * https://refreshless.com/nouislider/pips/
     */
    pips?: SliderProps['pips'];
    /**
     * Настройка шагов
     * https://refreshless.com/nouislider/pips/#section-range
     */
    range?: SliderProps['range'];
    /**
     * Значение инпута
     */
    value?: number | string;
    /**
     * Значение слайдера
     */
    sliderValue?: number;
    /**
     * Дополнительная информация в правой части поля
     */
    info?: ReactNode;
    /**
     * Компонент поля ввода
     */
    Input?: ComponentType<Omit<InputProps, 'onChange' | 'value' | 'defaultValue'>>;
    /**
     * Кастомные пропсы для поля ввода
     */
    customInputProps?: Record<string, unknown>;
    /**
     * Класс для инпута
     */
    inputClassName?: string;
    /**
     * Класс для слайдера
     */
    sliderClassName?: string;
    /**
     * Класс для шагов
     */
    stepsClassName?: string;
    /**
     * Обработчик изменения значения через слайдер или поле ввода
     */
    onChange?: OnChangeType;
    /**
     * Обработчик ввода
     */
    onInputChange?: OnInputChangeType;
    /**
     * Обработчик изменения слайдера
     */
    onSliderChange?: (payload: {
        value: number;
    }) => void;
    /**
     * Обработчик начала перетаскивания ползунка
     */
    onSliderStart?: SliderProps['onStart'];
    /**
     * Обработчик окончания перетаскивания ползунка
     */
    onSliderEnd?: SliderProps['onEnd'];
    /**
     * Включение/отключение отображения точек на слайдере
     * @default false
     */
    dots?: SliderProps['dots'];
    /**
     * Тип отображения точек на слайдере: 'step' - по шагу, 'custom' - произвольные
     * @default 'step'
     */
    dotsSlider?: SliderProps['dotsSlider'];
    /**
     * Массив значений для произвольного размещения точек
     */
    customDots?: SliderProps['customDots'];
    /**
     * Показывать точки для pips-значений вместе с customDots в режиме dotsSlider='custom'
     * @default false
     */
    showPipsDots?: SliderProps['showPipsDots'];
    /**
     * Отображение подписи под точками:
     * - all: подпись для всех точек
     * - pipsOnly: подпись только для pips-значений
     * - customPipsOnly: подпись только для customDots
     * - none: подписи отключены
     * @default 'all'
     */
    pipsLabel?: SliderProps['pipsLabel'];
    /**
     * Идентификатор для систем автоматизированного тестирования
     */
    dataTestId?: string;
    /**
     * Жирность текста
     * @default true
     */
    bold?: boolean;
}
export declare const SliderInput: React.ForwardRefExoticComponent<SliderInputProps & React.RefAttributes<HTMLInputElement>>;
