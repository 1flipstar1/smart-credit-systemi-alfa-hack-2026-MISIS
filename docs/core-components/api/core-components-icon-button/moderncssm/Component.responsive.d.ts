import React from 'react';
import { type IconButtonProps } from './types/icon-button-props';
type ResponsiveProps = {
    /**
     * Контрольная точка, с нее начинается desktop версия
     * @default 1024
     */
    breakpoint?: number;
    /**
     * Версия, которая будет использоваться при серверном рендеринге
     */
    client?: 'desktop' | 'mobile';
    /**
     * Значение по-умолчанию для хука useMatchMedia
     * @deprecated Используйте client
     */
    defaultMatchMediaValue?: boolean | (() => boolean);
};
export type IconButtonResponsiveProps = IconButtonProps & ResponsiveProps;
export declare const IconButtonResponsive: React.ForwardRefExoticComponent<IconButtonProps & ResponsiveProps & React.RefAttributes<HTMLButtonElement>>;
export {};
