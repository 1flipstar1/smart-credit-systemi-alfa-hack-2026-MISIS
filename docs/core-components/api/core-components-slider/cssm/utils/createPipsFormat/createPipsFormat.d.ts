import { type PipsFormat } from '../../types';
/**
 * Создает format функцию для pips
 *
 * @description
 * - all: показывает метки для всех соответствующих точек
 * - pipsOnly: показывает метки только для значений pips
 * - customPipsOnly: показывает метки только для customDots
 * - none: скрывает все метки
 */
export declare const createPipsFormat: ({ customDots, pipsValues, pipsLabel }: PipsFormat) => {
    to: (value: number) => string | number;
};
