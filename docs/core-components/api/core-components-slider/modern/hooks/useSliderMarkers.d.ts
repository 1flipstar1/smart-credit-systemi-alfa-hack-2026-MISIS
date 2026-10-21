import { type MutableRefObject } from 'react';
import { type API } from 'nouislider';
import { type SliderProps } from '../types';
export type SliderRef = MutableRefObject<(HTMLDivElement & {
    noUiSlider: API;
}) | null>;
type UseSliderMarkersProps = {
    sliderRef: SliderRef;
    hasValueTo: boolean;
} & Pick<SliderProps, 'valueTo' | 'onChange'> & {
    value: number;
    min: number;
    max: number;
};
/**
 * Хук для управления состоянием маркеров слайдера
 *
 * @description
 * Управляет видимостью и стилизацией маркеров на слайдере:
 * - Скрывает маркеры когда слайдер находится точно на них
 * - Делает маркеры белыми когда слайдер прошел их (покрыты noUi-connect)
 * - Поддерживает как одиночные значения, так и диапазоны
 */
export declare const useSliderMarkers: ({ sliderRef, hasValueTo, value, valueTo, min, max, onChange, }: UseSliderMarkersProps) => {
    /** Функция для обновления состояния маркеров */
    updateMarkersState: (currentValue: number, currentValueTo?: number) => void;
    /** Функция для создания обработчика события slide */
    createSlideHandler: (slider: API) => () => void;
};
export {};
