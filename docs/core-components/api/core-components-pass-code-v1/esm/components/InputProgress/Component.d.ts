import React from 'react';
export type InputProgressProps = {
    maxCodeLength: number;
    codeLength?: number;
    error: boolean;
    value?: string;
    dataTestId?: string;
};
export declare const InputProgress: React.FC<InputProgressProps>;
