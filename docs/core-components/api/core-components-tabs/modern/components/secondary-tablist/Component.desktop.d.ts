import React from 'react';
import { type SecondaryTabListProps } from '../../typings';
export type SecondaryTabListDesktopProps = Omit<SecondaryTabListProps, 'tagSize' | 'breakpoint'>;
export declare const SecondaryTabListDesktop: ({ className, size, tagView, ...restProps }: SecondaryTabListDesktopProps) => React.JSX.Element;
