import React from 'react';
import { type BaseTagProps } from '../typings';
export type TagDesktopProps = Omit<BaseTagProps, 'styles' | 'colorStylesMap'>;
export declare const TagDesktop: React.ForwardRefExoticComponent<TagDesktopProps & React.RefAttributes<HTMLButtonElement>>;
