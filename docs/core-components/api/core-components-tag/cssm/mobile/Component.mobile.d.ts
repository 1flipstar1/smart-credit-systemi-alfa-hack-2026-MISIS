import React from 'react';
import { type BaseTagProps } from '../typings';
export type TagMobileProps = Omit<BaseTagProps, 'styles' | 'colorStylesMap'>;
export declare const TagMobile: React.ForwardRefExoticComponent<TagMobileProps & React.RefAttributes<HTMLButtonElement>>;
