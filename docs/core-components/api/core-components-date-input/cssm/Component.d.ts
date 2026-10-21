import React, { type ChangeEvent } from 'react';
import { type InputProps } from '@alfalab/core-components-input/cssm';
export type DateInputProps = Omit<InputProps, 'onChange'> & {
    /**
     * Управление нативным режимом на мобильных устройствах
     */
    mobileMode?: 'input' | 'native';
    /**
     * Обработчик изменения значения
     */
    onChange?: (event: ChangeEvent<HTMLInputElement>, payload: {
        date: Date;
        value: string;
    }) => void;
    /**
     * Обработчик окончания ввода
     */
    onComplete?: (event: ChangeEvent<HTMLInputElement>, payload: {
        date: Date;
        value: string;
    }) => void;
};
/**
 * @deprecated
 * use UniversalDateInput instead
 */
export declare const DateInput: React.ForwardRefExoticComponent<Omit<InputProps, "onChange"> & {
    /**
     * Управление нативным режимом на мобильных устройствах
     */
    mobileMode?: "input" | "native";
    /**
     * Обработчик изменения значения
     */
    onChange?: (event: ChangeEvent<HTMLInputElement>, payload: {
        date: Date;
        value: string;
    }) => void;
    /**
     * Обработчик окончания ввода
     */
    onComplete?: (event: ChangeEvent<HTMLInputElement>, payload: {
        date: Date;
        value: string;
    }) => void;
} & React.RefAttributes<HTMLInputElement>>;
