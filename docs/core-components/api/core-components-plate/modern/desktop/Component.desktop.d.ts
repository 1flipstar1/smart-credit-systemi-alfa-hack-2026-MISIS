import React from 'react';
import { type BasePlateProps } from '../components/base-plate';
export type PlateDesktopProps = Omit<BasePlateProps, 'styles'>;
export declare const PlateDesktop: React.ForwardRefExoticComponent<PlateDesktopProps & React.RefAttributes<HTMLDivElement>>;
