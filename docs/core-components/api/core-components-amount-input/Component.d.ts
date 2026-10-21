import React from 'react';
/**
 * Компонент для ввода денежных значений
 */
export declare const AmountInput: React.ForwardRefExoticComponent<Omit<import("@alfalab/core-components-input").InputProps, "type" | "value" | "defaultValue" | "onChange"> & {
    value?: string | number | null;
    defaultValue?: string | number | null;
    codeFormat?: "letter" | "symbolic";
    view?: "default" | "withZeroMinorPart";
    currency?: import("@alfalab/data").CurrencyCodes;
    suffix?: string | null;
    integerLength?: number;
    minority?: number;
    integersOnly?: boolean;
    positiveOnly?: boolean;
    onChange?: (e: React.ChangeEvent<HTMLInputElement> | null, payload: {
        value: number | null;
        valueString: string;
    }) => void;
    transparentMinor?: boolean;
    stepper?: {
        step: number;
        min?: number;
        max?: number;
    };
    zeroValue?: boolean;
} & React.RefAttributes<HTMLInputElement>>;
