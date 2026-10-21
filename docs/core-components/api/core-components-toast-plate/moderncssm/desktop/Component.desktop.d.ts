import React from 'react';
import { type BaseToastPlateProps } from '../components/base-toast-plate';
export type ToastPlateDesktopProps = Omit<BaseToastPlateProps, 'styles' | 'bottomButtonPosition'>;
export declare const ToastPlateDesktop: React.ForwardRefExoticComponent<ToastPlateDesktopProps & React.RefAttributes<HTMLDivElement>>;
