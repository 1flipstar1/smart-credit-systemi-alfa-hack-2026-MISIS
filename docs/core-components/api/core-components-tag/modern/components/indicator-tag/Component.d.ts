import React, { type MouseEventHandler } from 'react';
import { type BaseTagProps, type StyleColors } from '../../typings';
export interface IndicatorTagProps extends Omit<BaseTagProps, 'Component' | 'colorStylesMap' | 'onClick' | 'styles' | 'view' | 'variant' | 'allowBackdropBlur' | 'childrenRef' | 'size'> {
    size?: 32 | 40 | 48 | 56;
    view?: 'filled' | 'muted';
    colorStyles?: StyleColors['default'];
    styles?: BaseTagProps['styles'];
    onClick?: MouseEventHandler<HTMLButtonElement>;
    focused?: boolean;
}
export declare const IndicatorTag: React.ForwardRefExoticComponent<IndicatorTagProps & React.RefAttributes<HTMLButtonElement>>;
