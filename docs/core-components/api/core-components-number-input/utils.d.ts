import { type MaskitoOptions, type MaskitoPlugin } from '@maskito/core';
export declare const MINUS_SIGN = "-";
export declare const SEPARATORS: string[];
export declare const MAX_DIGITS = 15;
export declare function parseNumber(value?: string | number | null): number;
/**
 * Преобразовать число в строку с заменой экспоненты на десятичную дробь
 */
export declare function stringifyNumberWithoutExp(value: number): string;
export declare function createMaskOptions({ separator, fractionLength, min, max, }: {
    separator: string;
    fractionLength: number;
    min: number;
    max: number;
}): MaskitoOptions;
export declare function createMinMaxPlugin({ min, max }: {
    min: number;
    max: number;
}): MaskitoPlugin;
export declare function createNotEmptyPartsPlugin(separator: string): MaskitoPlugin;
export declare function getNumberInputTestIds(dataTestId: string): {
    input: string;
    inputWrapper: string;
    inputWrapperInner: string;
    leftAddons: string;
    rightAddons: string;
    error: string;
    hint: string;
    decrementButton: string;
    incrementButton: string;
};
/**
 * Определение минимального / максимального значения
 * @description Если значение не передано, вернется { Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER }
 */
export declare const getMinMaxOrDefault: ({ minProp, maxProp, }: {
    minProp?: number;
    maxProp?: number;
}) => {
    min: number;
    max: number;
};
