import React from 'react';
export type InputProgressProps = {
    maxCodeLength: number;
    codeLength?: number;
    error: boolean;
    value?: string;
    dataTestId?: string;
    success?: boolean;
};
export declare const InputProgress: React.FC<InputProgressProps>;
