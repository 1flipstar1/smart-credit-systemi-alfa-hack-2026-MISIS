import React, { type ReactNode } from 'react';
import { type ButtonMobileProps } from '@alfalab/core-components-button/modern/mobile';
export type KeyPadButtonProps<T> = {
    /**
     * Вид кнопки.
     */
    view: ButtonMobileProps['view'];
    /**
     * Значение.
     */
    children: T;
    /**
     * Дополнительный класс.
     */
    className?: string;
    /**
     * Дополнительный класс кнопки.
     */
    buttonClassName?: string;
    /**
     * Коллбэк нажатия на кнопку.
     */
    onClick?: (payload: T) => void;
    /**
     * Идентификатор для систем автоматизированного тестирования.
     */
    dataTestId?: string;
};
export declare function KeyPadButton<T extends ReactNode>({ children, onClick, className, view, buttonClassName, dataTestId, }: KeyPadButtonProps<T>): React.JSX.Element;
