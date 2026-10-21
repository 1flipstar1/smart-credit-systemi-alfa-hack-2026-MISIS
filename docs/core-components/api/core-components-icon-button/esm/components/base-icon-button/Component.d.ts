import React from 'react';
import { type IconButtonProps } from '../../types/icon-button-props';
type BaseIconButtonProps = {
    client: 'desktop' | 'mobile';
    clientStyles: Record<string, string>;
};
export declare const BaseIconButton: React.ForwardRefExoticComponent<IconButtonProps & BaseIconButtonProps & React.RefAttributes<HTMLButtonElement>>;
export {};
