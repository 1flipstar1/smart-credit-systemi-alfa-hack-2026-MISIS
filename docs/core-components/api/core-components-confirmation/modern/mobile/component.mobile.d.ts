import { type FC } from 'react';
import { type ConfirmationProps } from '../types';
export type MobileConfirmationProps = Omit<ConfirmationProps, 'mobile'>;
export declare const ConfirmationMobile: FC<MobileConfirmationProps>;
