import React, { type HTMLAttributes, type ReactNode } from 'react';
export type StyleColors = {
    default: {
        [key: string]: string;
    };
    inverted: {
        [key: string]: string;
    };
};
export type BaseFormControlProps = HTMLAttributes<HTMLDivElement> & {
    /**
     * Растягивает компонент на ширину контейнера
     */
    block?: boolean;
    /**
     * Размер компонента
     * @default 48
     */
    size?: 40 | 48 | 56 | 64 | 72;
    /**
     * Набор цветов для компонента
     */
    colors?: 'default' | 'inverted';
    /**
     * Заблокированное состояние
     */
    disabled?: boolean;
    /**
     * Cостояние только для чтения
     */
    readOnly?: boolean;
    /**
     * Заполненное состояние
     */
    filled?: boolean;
    /**
     * Выбранное (фокус) состояние
     */
    focused?: boolean;
    /**
     * Отображение ошибки
     */
    error?: ReactNode | boolean;
    /**
     * Текст подсказки
     */
    hint?: ReactNode;
    /**
     * Лейбл компонента
     */
    label?: ReactNode;
    /**
     * Вид лейбла внутри / снаружи
     */
    labelView?: 'inner' | 'outer';
    /**
     * Слот слева
     */
    leftAddons?: ReactNode;
    /**
     * Слот справа
     */
    rightAddons?: ReactNode;
    /**
     * Слот под полем
     */
    bottomAddons?: ReactNode;
    /**
     * Дополнительный класс
     */
    className?: string;
    /**
     * Дополнительный класс для поля
     */
    fieldClassName?: string;
    /**
     * Дополнительный класс для поля
     */
    inputWrapperClassName?: string;
    /**
     * Дополнительный класс для лейбла
     */
    labelClassName?: string;
    /**
     * Дополнительный класс для аддонов
     */
    addonsClassName?: string;
    /**
     * Свойства для обертки левых аддонов
     */
    leftAddonsProps?: HTMLAttributes<HTMLDivElement>;
    /**
     * Свойства для обертки правых аддонов
     */
    rightAddonsProps?: HTMLAttributes<HTMLDivElement>;
    /**
     * Идентификатор для систем автоматизированного тестирования.
     * Для слота слева используется модификатор -left-addons, слота справа -right-addons,
     * ошибки -error-message, текста подсказки -hint, внутренней части компонента -inner
     */
    dataTestId?: string;
    /**
     * Компонент поля (инпут, textarea и пр.)
     */
    children?: ReactNode;
    /**
     * Основные стили компонента.
     */
    styles: {
        [key: string]: string;
    };
    /**
     * Стили компонента для default и inverted режима.
     */
    colorStyles?: StyleColors;
};
export declare const BaseFormControl: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLDivElement> & {
    /**
     * Растягивает компонент на ширину контейнера
     */
    block?: boolean;
    /**
     * Размер компонента
     * @default 48
     */
    size?: 40 | 48 | 56 | 64 | 72;
    /**
     * Набор цветов для компонента
     */
    colors?: "default" | "inverted";
    /**
     * Заблокированное состояние
     */
    disabled?: boolean;
    /**
     * Cостояние только для чтения
     */
    readOnly?: boolean;
    /**
     * Заполненное состояние
     */
    filled?: boolean;
    /**
     * Выбранное (фокус) состояние
     */
    focused?: boolean;
    /**
     * Отображение ошибки
     */
    error?: ReactNode | boolean;
    /**
     * Текст подсказки
     */
    hint?: ReactNode;
    /**
     * Лейбл компонента
     */
    label?: ReactNode;
    /**
     * Вид лейбла внутри / снаружи
     */
    labelView?: "inner" | "outer";
    /**
     * Слот слева
     */
    leftAddons?: ReactNode;
    /**
     * Слот справа
     */
    rightAddons?: ReactNode;
    /**
     * Слот под полем
     */
    bottomAddons?: ReactNode;
    /**
     * Дополнительный класс
     */
    className?: string;
    /**
     * Дополнительный класс для поля
     */
    fieldClassName?: string;
    /**
     * Дополнительный класс для поля
     */
    inputWrapperClassName?: string;
    /**
     * Дополнительный класс для лейбла
     */
    labelClassName?: string;
    /**
     * Дополнительный класс для аддонов
     */
    addonsClassName?: string;
    /**
     * Свойства для обертки левых аддонов
     */
    leftAddonsProps?: HTMLAttributes<HTMLDivElement>;
    /**
     * Свойства для обертки правых аддонов
     */
    rightAddonsProps?: HTMLAttributes<HTMLDivElement>;
    /**
     * Идентификатор для систем автоматизированного тестирования.
     * Для слота слева используется модификатор -left-addons, слота справа -right-addons,
     * ошибки -error-message, текста подсказки -hint, внутренней части компонента -inner
     */
    dataTestId?: string;
    /**
     * Компонент поля (инпут, textarea и пр.)
     */
    children?: ReactNode;
    /**
     * Основные стили компонента.
     */
    styles: {
        [key: string]: string;
    };
    /**
     * Стили компонента для default и inverted режима.
     */
    colorStyles?: StyleColors;
} & React.RefAttributes<HTMLDivElement>>;
