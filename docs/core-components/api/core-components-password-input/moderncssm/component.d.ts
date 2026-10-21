import React from 'react';
import { type InputProps } from '@alfalab/core-components-input/moderncssm';
export type PasswordInputProps = Omit<InputProps, 'size'> & {
    /**
     * Размер компонента
     * @description s, m, l, xl deprecated, используйте вместо них 48, 56, 64, 72 соответственно
     */
    size?: Exclude<InputProps['size'], 40>;
    /**
     * Управление видимостью пароля (controlled)
     */
    passwordVisible?: boolean;
    /**
     * Управление текстом подсказки
     */
    passwordHint?: {
        visible: string;
        hidden: string;
    };
    /**
     * Коллбэк при изменении видимости пароля
     */
    onPasswordVisibleChange?: (visible: boolean) => void;
};
export declare const PasswordInput: React.ForwardRefExoticComponent<Omit<InputProps, "size"> & {
    /**
     * Размер компонента
     * @description s, m, l, xl deprecated, используйте вместо них 48, 56, 64, 72 соответственно
     */
    size?: Exclude<InputProps["size"], 40>;
    /**
     * Управление видимостью пароля (controlled)
     */
    passwordVisible?: boolean;
    /**
     * Управление текстом подсказки
     */
    passwordHint?: {
        visible: string;
        hidden: string;
    };
    /**
     * Коллбэк при изменении видимости пароля
     */
    onPasswordVisibleChange?: (visible: boolean) => void;
} & React.RefAttributes<HTMLInputElement>>;
