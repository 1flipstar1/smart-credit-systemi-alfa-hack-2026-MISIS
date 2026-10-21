import React from 'react';
import { type BaseRadioGroupProps } from '../components/base-radio-group';
export type RadioGroupMobileProps = Omit<BaseRadioGroupProps, 'styles'>;
export declare const RadioGroupMobile: React.ForwardRefExoticComponent<RadioGroupMobileProps & React.RefAttributes<HTMLDivElement>>;
