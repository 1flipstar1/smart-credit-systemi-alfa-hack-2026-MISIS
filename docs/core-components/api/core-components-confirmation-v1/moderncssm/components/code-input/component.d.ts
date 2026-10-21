import React, { type KeyboardEvent } from 'react';
import { type ContentAlign } from '../../component';
type CodeInputProps = {
    processing: boolean;
    value: string;
    slotsCount: number;
    error: boolean;
    className?: string;
    alignContent: ContentAlign;
    handleChange: (code: string) => void;
    handleInputKeyDown: (event: KeyboardEvent) => void;
};
export declare const CodeInput: React.ForwardRefExoticComponent<CodeInputProps & React.RefAttributes<HTMLInputElement>>;
export {};
