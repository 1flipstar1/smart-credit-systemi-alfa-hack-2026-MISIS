import React, { type ReactNode } from 'react';
import { type ButtonMobileProps } from '@alfalab/core-components-button/moderncssm/mobile';
export interface KeyPadButtonProps<T> {
    /**
     * Вид кнопки
     */
    view: ButtonMobileProps['view'];
    /**
     * Значение
     */
    children: T;
    /**
     * Дополнительный класс
     */
    className?: string;
    /**
     * Дополнительный класс кнопки
     */
    buttonClassName?: string;
    /**
     * Коллбэк нажатия на кнопку
     */
    onClick?: (payload: T) => void;
    /**
     * Идентификатор для систем автоматизированного тестирования
     */
    dataTestId?: string;
    /**
     * Заголовок кнопки
     */
    title?: string;
}
export declare function KeyPadButton<T extends ReactNode>({ children, onClick, view, buttonClassName, dataTestId, title, }: KeyPadButtonProps<T>): React.JSX.Element;
