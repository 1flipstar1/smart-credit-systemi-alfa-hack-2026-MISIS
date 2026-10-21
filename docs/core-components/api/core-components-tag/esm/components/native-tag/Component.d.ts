import React, { type MouseEventHandler } from 'react';
import { type BaseTagProps, type StyleColors } from '../../typings';
interface NativeTagProps extends Omit<BaseTagProps, 'Component' | 'colorStylesMap' | 'onClick' | 'shape'> {
    shape: 'rounded' | 'rectangular';
    colorStyles: StyleColors['default'];
    onClick?: MouseEventHandler<HTMLButtonElement>;
    focused?: boolean;
}
export declare const NativeTag: React.ForwardRefExoticComponent<NativeTagProps & React.RefAttributes<HTMLButtonElement>>;
export {};
