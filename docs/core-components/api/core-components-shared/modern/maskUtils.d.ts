import { type RefObject } from 'react';
import { type MaskitoPlugin, type MaskitoPostprocessor, type MaskitoPreprocessor } from '@maskito/core';
import { type Country } from '@alfalab/core-components-types/modern';
/**
 *  Запрещает каретке становиться за указанные границы
 */
declare function caretGuard(guard: (value: string, selection: readonly [from: number, to: number]) => [from: number, to: number]): MaskitoPlugin;
/**
 *  Запрещает удалять указанный префикс
 */
declare function prefixPostprocessor(prefix: string): MaskitoPostprocessor;
/**
 * Препроцессор необходим для правильной вставки/автокомплита телефонного номера
 */
declare function insertionPhonePreprocessor(mask: Array<string | RegExp>, countryCode: string | undefined, clearableCountryCode: boolean | undefined): MaskitoPreprocessor;
/**
 * Препроцессор необходим для сохранения кода страны при автозаполнении
 */
declare function preserveCountryCodePreprocessor(countryRef: RefObject<Country | null>, createMask: (country: Country) => Array<string | RegExp>): MaskitoPreprocessor;
/**
 * @deprecated Будет удален в следующей мажорной версии
 */
export declare const maskUtils: {
    insertionPhonePreprocessor: typeof insertionPhonePreprocessor;
    prefixPostprocessor: typeof prefixPostprocessor;
    caretGuard: typeof caretGuard;
    preserveCountryCodePreprocessor: typeof preserveCountryCodePreprocessor;
};
export {};
