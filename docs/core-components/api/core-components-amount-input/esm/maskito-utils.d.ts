import { type MaskitoOptions, type MaskitoPlugin } from '@maskito/core';
import { type MaskitoNumberParams } from '@maskito/kit';
import { type AmountInputProps } from './types';
interface NumberParts {
    minus: string;
    integerPart: string;
    decimalPart: string;
    decimalSeparator: string;
}
export type NumberParams = Required<Pick<MaskitoNumberParams, 'decimalPseudoSeparators' | 'decimalSeparator' | 'maximumFractionDigits' | 'minusPseudoSigns' | 'minusSign' | 'thousandSeparator'>>;
export declare const COMPONENT_DECIMAL_SEPARATOR = ",";
export declare const DEFAULT_DECIMAL_SEPARATORS: string[];
export declare const COMPONENT_MINUS_SIGN = "\u2212";
export declare const DEFAULT_MINUS_SIGNS: string[];
export declare function toValueAsString(value: number | string | null): string;
export declare function isInputValueCorrect(value: string, numberParams: NumberParams): boolean;
export declare function isCorrectValue(value: string | number | null, { integerLength, integersOnly, minority, }: Required<Pick<AmountInputProps, 'minority' | 'integersOnly' | 'integerLength'>>): boolean;
export declare function toFractionDigits(minority: number): number;
export declare function toIntegerDigits(integerLength: number, maximumFractionDigits: number): number;
/**
 * number operations like multiplication and division were not used intentionally
 */
export declare function toDecimalView(value: number | string | null, minority: number): number | string | null;
/**
 * number operations like multiplication and division were not used intentionally
 */
export declare function fromDecimalView(value: string | null, minority: number): number | null;
export declare function stringifyNumber(value: number | string | null, numberParams: NumberParams): string;
export declare function toNumberFormat(value: string, numberParams: NumberParams): string;
export declare function parseNumber(value: string, numberParams: NumberParams): string | null;
export declare function processDecimalPart(value: string, numberParams: NumberParams, view: 'default' | 'withZeroMinorPart'): string;
/**
 * copy-paste of toNumberParts
 * @see https://github.com/taiga-family/maskito/blob/70c50e7eea6209df6cda7ff311df9a4ba1b1c192/projects/kit/src/lib/masks/number/utils/number-parts.ts#L14
 */
export declare function toNumberParts(value: string, params: Pick<NumberParams, 'decimalSeparator' | 'maximumFractionDigits' | 'minusSign'> & Partial<Pick<NumberParams, 'decimalPseudoSeparators' | 'minusPseudoSigns'>>): NumberParts;
/**
 * copy-paste of fromNumberParts
 * @see https://github.com/taiga-family/maskito/blob/70c50e7eea6209df6cda7ff311df9a4ba1b1c192/projects/kit/src/lib/masks/number/utils/number-parts.ts#L58
 */
export declare function fromNumberParts({ minus, integerPart, decimalPart, decimalSeparator }: Partial<NumberParts>, params?: Pick<NumberParams, 'decimalSeparator'>): string;
export declare function clipboardPlugin(numberParams: NumberParams): MaskitoPlugin;
export declare function dispatchInputRejectEvent(element: EventTarget | null): void;
export declare function isEquivalentInput(a: string, b: string, { decimalSeparator }: Pick<NumberParams, 'decimalSeparator'>): boolean;
export declare function maskitoOptionsGenerator(numberParams: NumberParams, posivite: boolean, view: 'default' | 'withZeroMinorPart', maximumIntegerDigits: number, onInputReject?: () => void, zeroValue?: boolean): MaskitoOptions;
export {};
