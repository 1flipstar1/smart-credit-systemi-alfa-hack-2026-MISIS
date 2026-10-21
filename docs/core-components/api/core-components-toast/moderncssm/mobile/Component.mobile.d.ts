import React from 'react';
import { type BaseToastProps } from '../components/base-toast';
export type ToastMobileProps = Omit<BaseToastProps, 'breakpoint'>;
export declare const ToastMobile: React.ForwardRefExoticComponent<ToastMobileProps & React.RefAttributes<HTMLDivElement>>;
