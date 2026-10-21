import React from 'react';
import { type CheckboxProps } from '@alfalab/core-components-checkbox';
import { type OptionsListProps } from '../../../../typings';
export type HeaderProps = {
    checked?: boolean;
    indeterminate?: boolean;
    onChange?: CheckboxProps['onChange'];
    mobile?: boolean;
    dataTestId?: string;
    checkmarkPosition?: 'before' | 'after';
    size?: OptionsListProps['size'];
};
export declare const Header: React.FC<HeaderProps>;
