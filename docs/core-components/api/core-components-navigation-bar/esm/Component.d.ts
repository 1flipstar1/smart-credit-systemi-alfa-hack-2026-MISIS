import React, { type ReactNode } from 'react';
export interface NavigationBarProps {
    /**
     * Заголовок
     */
    title?: string;
    /**
     * Подзаголовок
     */
    subtitle?: string;
    /**
     * Контент шапки
     */
    children?: ReactNode;
    /**
     * Выравнивание заголовка
     * @default center
     */
    align?: 'left' | 'center';
    /**
     * Цвет фона
     */
    backgroundColor?: string;
    /**
     * Наличие бордера
     */
    border?: boolean;
    /**
     * Фиксирует шапку
     */
    sticky?: boolean;
    /**
     * Слот снизу
     */
    bottomAddons?: ReactNode;
    /**
     * Слот слева
     */
    leftAddons?: ReactNode;
    /**
     * Слот справа
     */
    rightAddons?: ReactNode;
    /**
     * Дополнительный класс для контента
     */
    contentClassName?: string;
    /**
     * Дополнительный класс для обертки контента
     */
    contentWrapperClassName?: string;
    /**
     * Дополнительный класс
     */
    className?: string;
    /**
     * Дополнительный класс для правого аддона
     */
    rightAddonsClassName?: string;
    /**
     * Дополнительный класс для левого аддона
     */
    leftAddonsClassName?: string;
    /**
     * Дополнительный класс для нижнего аддона
     */
    bottomAddonsClassName?: string;
    /**
     * Идентификатор для систем автоматизированного тестирования.
     */
    dataTestId?: string;
}
export declare const NavigationBar: React.ForwardRefExoticComponent<NavigationBarProps & React.RefAttributes<HTMLDivElement>>;
