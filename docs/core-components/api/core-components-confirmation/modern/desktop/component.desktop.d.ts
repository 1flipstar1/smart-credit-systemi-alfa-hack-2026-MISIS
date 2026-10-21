import { type FC } from 'react';
import { type ConfirmationProps } from '../types';
export type DesktopConfirmationProps = Omit<ConfirmationProps, 'mobile' | 'breakpoint'>;
export declare const ConfirmationDesktop: FC<DesktopConfirmationProps>;
