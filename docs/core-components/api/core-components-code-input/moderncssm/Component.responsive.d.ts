import React from 'react';
import { type BaseCodeInputProps, type CustomInputRef } from './typings';
export interface CodeInputProps extends Omit<BaseCodeInputProps, 'stylesInput'> {
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
}
export declare const CodeInput: React.ForwardRefExoticComponent<CodeInputProps & React.RefAttributes<CustomInputRef>>;
