import React from 'react';
import { type BaseInputProps } from '../base-input';
interface ClearButtonProps {
    disabled?: boolean;
    onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
    colors: 'default' | 'inverted';
    dataTestId?: string;
    size?: BaseInputProps['size'];
}
export declare const ClearButton: React.FC<ClearButtonProps>;
export {};
