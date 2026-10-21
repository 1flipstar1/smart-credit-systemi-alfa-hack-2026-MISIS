import React, { type ChangeEvent } from 'react';
import { type InputProps } from '@alfalab/core-components-input/esm';
export type TimeInputProps = Omit<InputProps, 'onChange'> & {
    /**
     * Обработчик изменения значения
     */
    onChange?: (event: ChangeEvent<HTMLInputElement>, payload: {
        hours: number;
        mins: number;
        value: string;
    }) => void;
    /**
     * Обработчик окончания ввода
     */
    onComplete?: (event: ChangeEvent<HTMLInputElement>, payload: {
        hours: number;
        mins: number;
        value: string;
    }) => void;
};
/**
 * @deprecated
 * use UniversalDateInput instead
 */
export declare const TimeInput: React.ForwardRefExoticComponent<Omit<InputProps, "onChange"> & {
    /**
     * Обработчик изменения значения
     */
    onChange?: (event: ChangeEvent<HTMLInputElement>, payload: {
        hours: number;
        mins: number;
        value: string;
    }) => void;
    /**
     * Обработчик окончания ввода
     */
    onComplete?: (event: ChangeEvent<HTMLInputElement>, payload: {
        hours: number;
        mins: number;
        value: string;
    }) => void;
} & React.RefAttributes<HTMLInputElement>>;
