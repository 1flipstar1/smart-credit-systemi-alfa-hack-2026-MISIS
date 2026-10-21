/**
 * https://github.com/core-ds/utils
 * TODO: нужно перенести утилиты в этот проект, когда он будет готов
 */
import { type CurrencyCodes } from '@alfalab/data';
import { type AmountInputProps } from '../types';
/**
 * Форматирует введенное значение
 * @param enteredValue Значение введенное в инпут
 * @param currency валюта
 * @param minority количество минорных единиц
 */
export declare function getFormattedValue(enteredValue: string, currency: CurrencyCodes, minority: number): string;
export declare function getAmountValueFromStr(str: string, minority: number): number | null;
export declare function getCurrencyCodeWithFormat(currency: CurrencyCodes, codeFormat: AmountInputProps['codeFormat']): string;
export declare const getVisiblePlaceholder: (placeholder: string, label: React.ReactNode, labelView?: string) => string | undefined;
