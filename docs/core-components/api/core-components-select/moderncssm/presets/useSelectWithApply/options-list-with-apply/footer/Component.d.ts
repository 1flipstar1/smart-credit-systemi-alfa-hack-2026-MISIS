import React from 'react';
import { type OptionShape, type OptionsListProps } from '../../../../typings';
export type FooterProps = {
    handleClear?: () => void;
    handleApply?: () => void;
    showClear?: boolean;
    selectedDraft?: OptionShape[];
    dataTestId?: string;
    size?: OptionsListProps['size'];
};
export declare const Footer: ({ handleApply, handleClear, showClear, selectedDraft, dataTestId, size, }: FooterProps) => React.JSX.Element;
