import React from 'react';
import { type BaseToastProps } from '../components/base-toast';
export type ToastDesktopProps = Omit<BaseToastProps, 'bottomButtonPosition' | 'breakpoint'>;
export declare const ToastDesktop: React.ForwardRefExoticComponent<ToastDesktopProps & React.RefAttributes<HTMLDivElement>>;
