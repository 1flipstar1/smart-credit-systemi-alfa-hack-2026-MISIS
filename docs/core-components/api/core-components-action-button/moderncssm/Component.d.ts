import React, { type AnchorHTMLAttributes, type ButtonHTMLAttributes } from 'react';
type Colors = 'default' | 'inverted' | 'static';
type ComponentProps = {
    /**
     * Иконка кнопки
     */
    icon: React.ReactNode;
    /**
     *  Размер кнопки
     */
    size?: 48;
    /**
     * Тип кнопки
     */
    view?: 'primary' | 'secondary';
    /**
     * Дополнительный класс
     */
    className?: string;
    /**
     * Дополнительный класс для обертки иконки
     */
    iconWrapperClassName?: string;
    /**
     * Значение href для ссылки
     */
    href?: string;
    /**
     * Заблокировать кнопку
     */
    disabled?: boolean;
    /**
     * Показать лоадер
     */
    loading?: boolean;
    /**
     * Идентификатор для систем автоматизированного тестирования.
     * Для спиннера используется модификатор -loader
     */
    dataTestId?: string;
    /**
     * Палитра, в контексте которой используется кнопка
     */
    colors?: Colors;
};
type AnchorProps = ComponentProps & AnchorHTMLAttributes<HTMLAnchorElement>;
type ButtonProps = ComponentProps & ButtonHTMLAttributes<HTMLButtonElement>;
export type ActionButtonProps = Partial<AnchorProps | ButtonProps>;
export declare const ActionButton: React.ForwardRefExoticComponent<ActionButtonProps & React.RefAttributes<HTMLAnchorElement | HTMLButtonElement>>;
export {};
