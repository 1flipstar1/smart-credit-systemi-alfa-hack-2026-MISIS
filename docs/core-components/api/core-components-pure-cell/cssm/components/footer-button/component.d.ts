import React, { type AnchorHTMLAttributes, type ButtonHTMLAttributes } from 'react';
import { type ButtonProps } from '@alfalab/core-components-button/cssm';
type ComponentProps = Omit<ButtonProps, 'dataTestId'> & {
    /**
     * Идентификатор для систем автоматизированного тестирования.
     * Используется модификатор -button
     */
    dataTestId?: string;
};
type FooterButtonProps = ComponentProps & Partial<AnchorHTMLAttributes<HTMLAnchorElement> | ButtonHTMLAttributes<HTMLButtonElement>>;
export declare const FooterButton: React.ForwardRefExoticComponent<FooterButtonProps & React.RefAttributes<HTMLAnchorElement | HTMLButtonElement>>;
export {};
