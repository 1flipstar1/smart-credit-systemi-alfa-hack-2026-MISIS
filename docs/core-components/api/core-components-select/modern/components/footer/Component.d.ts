import React from 'react';
export type FooterProps = {
    handleClear?: () => void;
    handleApply?: () => void;
    showClear?: boolean;
    clearText?: string;
    applyText?: string;
    dataTestId?: string;
};
export declare const Footer: ({ handleApply, handleClear, showClear, clearText, applyText, dataTestId, }: FooterProps) => React.JSX.Element;
