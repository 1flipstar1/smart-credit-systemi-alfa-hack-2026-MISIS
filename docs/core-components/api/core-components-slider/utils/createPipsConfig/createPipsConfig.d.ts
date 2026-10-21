import { type Options } from 'nouislider';
import { type CreatePipsConfigParams } from '../../types';
type PipsConfig = (params: Omit<CreatePipsConfigParams, 'dotsSlider'>) => Options['pips'];
/**
 * Создает конфигурацию pips dotsSlider: 'step | custom' для noUiSlider
 *
 * @returns {Options['pips']} объект с полями:
 *   - mode: 'values' - режим отображения точек по значениям
 *   - values: number[] - объединенный и отсортированный массив значений из pips.values и customDots
 *   - filter: Function - функция фильтрации точек (из pips.filter или созданная через createPipsFilter)
 *   - format: Function - функция форматирования (из pips.format или созданный через createPipsFormat)
 *   - ...restPipsProps - остальные свойства из pips (например, stepped)
 */
export declare const config: Record<'step' | 'custom', PipsConfig>;
export declare const createPipsConfig: ({ dotsSlider, ...restProps }: CreatePipsConfigParams) => Options["pips"];
export {};
