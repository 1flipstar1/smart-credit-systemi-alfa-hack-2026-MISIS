import React, { type ChangeEventHandler, type InputHTMLAttributes, type KeyboardEventHandler } from 'react';
export interface InputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange' | 'onKeyDown' | 'enterKeyHint'> {
    index: number;
    value: string;
    error: boolean;
    compact?: boolean;
    onChange: ChangeEventHandler<HTMLInputElement>;
    onKeyDown: KeyboardEventHandler<HTMLInputElement>;
    stylesInput?: {
        [key: string]: string;
    };
}
export declare const Input: React.ForwardRefExoticComponent<InputProps & React.RefAttributes<HTMLInputElement>>;
