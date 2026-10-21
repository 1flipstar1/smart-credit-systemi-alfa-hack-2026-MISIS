import { type PipsFilter, type PipsType } from '../../types';
/** Создает функцию фильтрации для pips noUiSlider */
export declare const createPipsFilter: ({ customDots, mergeValues }: PipsFilter) => (value: number, type: PipsType) => PipsType;
