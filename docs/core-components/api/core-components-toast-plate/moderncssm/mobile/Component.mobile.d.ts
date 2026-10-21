import React from 'react';
import { type BaseToastPlateProps } from '../components/base-toast-plate';
export type ToastPlateMobileProps = Omit<BaseToastPlateProps, 'styles'>;
export declare const ToastPlateMobile: React.ForwardRefExoticComponent<ToastPlateMobileProps & React.RefAttributes<HTMLDivElement>>;
