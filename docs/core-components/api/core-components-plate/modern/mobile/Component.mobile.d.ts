import React from 'react';
import { type BasePlateProps } from '../components/base-plate';
export type PlateMobileProps = Omit<BasePlateProps, 'styles' | 'limitContentWidth'>;
export declare const PlateMobile: React.ForwardRefExoticComponent<PlateMobileProps & React.RefAttributes<HTMLDivElement>>;
