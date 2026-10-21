import React from 'react';
import { type InputProps } from '@alfalab/core-components-input/cssm';
type Mask = Array<string | RegExp>;
export type TextMaskConfig = {
    currentCaretPosition: number;
    rawValue: string;
    previousConformedValue: string;
    mask?: Mask | ((rawValue: string) => Mask);
    guide?: boolean;
    showMask?: boolean;
    placeholderChar?: string;
    keepCharPositions?: boolean;
    pipe?: (conformedValue: string, config: TextMaskConfig) => false | string | {
        value: string;
        indexesOfPipedChars: number[];
    };
};
export type MaskedInputProps = InputProps & {
    /**
     * Маска для поля ввода
     * https://github.com/text-mask/text-mask/blob/master/componentDocumentation.md#mask-array
     */
    mask?: TextMaskConfig['mask'];
    /**
     * Управляет поведением компонента при удалении символов
     */
    keepCharPositions?: TextMaskConfig['keepCharPositions'];
    /**
     * Дает возможность изменить значение поля перед рендером
     */
    onBeforeDisplay?: TextMaskConfig['pipe'];
};
export declare const PLACEHOLDER_CHAR = "\u2000";
export declare const MaskedInput: React.ForwardRefExoticComponent<Omit<import("@alfalab/core-components-input/components/base-input").BaseInputProps, "FormControlComponent"> & {
    breakpoint?: number;
    client?: "desktop" | "mobile";
    defaultMatchMediaValue?: boolean | (() => boolean);
} & {
    /**
     * Маска для поля ввода
     * https://github.com/text-mask/text-mask/blob/master/componentDocumentation.md#mask-array
     */
    mask?: TextMaskConfig["mask"];
    /**
     * Управляет поведением компонента при удалении символов
     */
    keepCharPositions?: TextMaskConfig["keepCharPositions"];
    /**
     * Дает возможность изменить значение поля перед рендером
     */
    onBeforeDisplay?: TextMaskConfig["pipe"];
} & React.RefAttributes<HTMLInputElement>>;
export {};
