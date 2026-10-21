type GetMarkerValueParams = {
    markerElement: HTMLElement;
    min: number;
    max: number;
};
/**
 * Получает значение маркера из DOM элемента
 */
export declare const getMarkerValue: ({ markerElement, min, max, }: GetMarkerValueParams) => number | null;
type UpdateMarkerAttributesParams = {
    markerElement: HTMLElement;
    isPassed: boolean;
    isCurrent: boolean;
};
/**
 * Обновляет DOM атрибуты маркера
 */
export declare const updateMarkerAttributes: ({ markerElement, isPassed, isCurrent, }: UpdateMarkerAttributesParams) => void;
interface MarkerParams {
    markerValue: number;
    currentValue: number;
    currentValueTo?: number;
    hasValueTo?: boolean;
}
/**
 * Определяет, пройден ли маркер (покрыт connect)
 */
export declare const isMarkerPassed: ({ markerValue, currentValue, currentValueTo, hasValueTo, }: MarkerParams) => boolean;
/**
 * Определяет, находится ли слайдер точно на маркере
 */
export declare const isMarkerCurrent: ({ markerValue, currentValue, currentValueTo, hasValueTo, }: MarkerParams) => boolean;
type UpdateMarkerClassesParams = {
    sliderElement: HTMLElement;
    pipsValues: number[];
    customDots?: number[];
};
/**
 * Обновляет CSS классы маркеров для скрытия точек в режиме dotsSlider: 'custom'
 */
export declare const updateMarkerClasses: ({ sliderElement, pipsValues, customDots, }: UpdateMarkerClassesParams) => void;
export {};
