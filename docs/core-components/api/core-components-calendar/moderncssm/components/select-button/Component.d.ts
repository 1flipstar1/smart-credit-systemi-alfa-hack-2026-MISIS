import React, { type ButtonHTMLAttributes } from 'react';
export type SelectButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
    /**
     * Дополнительный класс
     */
    className?: string;
    /**
     * Вид кнопки
     */
    view?: 'default' | 'filled' | 'current' | 'selected';
};
export declare const SelectButton: React.ForwardRefExoticComponent<React.ButtonHTMLAttributes<HTMLButtonElement> & {
    /**
     * Дополнительный класс
     */
    className?: string;
    /**
     * Вид кнопки
     */
    view?: "default" | "filled" | "current" | "selected";
} & React.RefAttributes<HTMLButtonElement>>;
