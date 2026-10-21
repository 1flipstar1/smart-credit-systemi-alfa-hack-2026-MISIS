import React from 'react';
import { type Button } from '@alfalab/core-components-button/esm';
import { type ButtonDesktop } from '@alfalab/core-components-button/esm/desktop';
import { type ButtonMobile } from '@alfalab/core-components-button/esm/mobile';
import { type CustomButtonProps } from '../../types/props';
export declare const BaseCustomButton: React.ForwardRefExoticComponent<(CustomButtonProps & {
    componentButton: typeof Button | typeof ButtonDesktop | typeof ButtonMobile;
}) & React.RefAttributes<HTMLAnchorElement | HTMLButtonElement>>;
