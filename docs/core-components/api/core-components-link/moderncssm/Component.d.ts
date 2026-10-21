import React, { type AnchorHTMLAttributes, type ElementType, type ReactNode } from 'react';
type NativeProps = AnchorHTMLAttributes<HTMLAnchorElement>;
export type LinkProps = NativeProps & {
    /**
     * URL для перехода (native prop)
     */
    href?: string;
    /**
     * Тип ссылки
     */
    view?: 'primary' | 'secondary' | 'default';
    /**
     * Пунктирное подчеркивание
     */
    pseudo?: boolean;
    /**
     * Включает / отключает подчеркивание
     * @default true
     */
    underline?: boolean;
    /**
     * Слот слева
     */
    leftAddons?: ReactNode;
    /**
     * Слот справа
     */
    rightAddons?: ReactNode;
    /**
     * Позволяет использовать кастомный компонент для кнопки (например Link из роутера)
     */
    Component?: ElementType;
    /**
     * Дополнительный класс (native prop)
     */
    className?: string;
    /**
     * Идентификатор для систем автоматизированного тестирования
     */
    dataTestId?: string;
    /**
     * Обработчик нажатия (native prop)
     */
    onClick?: NativeProps['onClick'];
    /**
     * Дочерние элементы (native prop)
     */
    children: ReactNode;
    /**
     * Набор цветов для компонента
     */
    colors?: 'default' | 'inverted';
};
export declare const Link: React.ForwardRefExoticComponent<NativeProps & {
    /**
     * URL для перехода (native prop)
     */
    href?: string;
    /**
     * Тип ссылки
     */
    view?: "primary" | "secondary" | "default";
    /**
     * Пунктирное подчеркивание
     */
    pseudo?: boolean;
    /**
     * Включает / отключает подчеркивание
     * @default true
     */
    underline?: boolean;
    /**
     * Слот слева
     */
    leftAddons?: ReactNode;
    /**
     * Слот справа
     */
    rightAddons?: ReactNode;
    /**
     * Позволяет использовать кастомный компонент для кнопки (например Link из роутера)
     */
    Component?: ElementType;
    /**
     * Дополнительный класс (native prop)
     */
    className?: string;
    /**
     * Идентификатор для систем автоматизированного тестирования
     */
    dataTestId?: string;
    /**
     * Обработчик нажатия (native prop)
     */
    onClick?: NativeProps["onClick"];
    /**
     * Дочерние элементы (native prop)
     */
    children: ReactNode;
    /**
     * Набор цветов для компонента
     */
    colors?: "default" | "inverted";
} & React.RefAttributes<HTMLAnchorElement>>;
export {};
