import React, { type ChangeEvent, type DetailedHTMLProps, type InputHTMLAttributes, type LabelHTMLAttributes, type ReactNode, type RefObject } from 'react';
type NativeProps = InputHTMLAttributes<HTMLInputElement>;
type Align = 'start' | 'center';
export type CheckboxProps = Omit<NativeProps, 'size' | 'onChange' | 'enterKeyHint'> & {
    /**
     * Управление состоянием вкл/выкл чекбокса (native prop)
     */
    checked?: boolean;
    /**
     * Обработчик переключения чекбокса
     */
    onChange?: (event: ChangeEvent<HTMLInputElement>, payload: {
        checked: boolean;
        name?: string;
    }) => void;
    /**
     * Текст подписи к чекбоксу
     */
    label?: ReactNode;
    /**
     * Текст подсказки снизу
     */
    hint?: ReactNode;
    /**
     * Размер компонента
     * @default 20
     */
    size?: 20 | 24;
    /**
     * Компактный текст подписи Только для `size=20`
     * @default false
     */
    compact?: boolean;
    /**
     * Доп. класс чекбокса
     */
    boxClassName?: string;
    /**
     * Доп. класс контента
     */
    contentClassName?: string;
    /**
     * Доп. класс лейбла
     */
    labelClassName?: string;
    /**
     * Доп. класс подсказки
     */
    hintClassName?: string;
    /**
     * Доп. класс ошибки
     */
    errorClassName?: string;
    /**
     * Доп. класс дополнительного слота
     */
    addonsClassName?: string;
    /**
     * Выравнивание
     */
    align?: Align;
    /**
     * Дополнительный слот
     */
    addons?: ReactNode;
    /**
     * Растягивать ли компонент на всю ширину
     */
    block?: boolean;
    /**
     * Управление состоянием включен / выключен
     */
    disabled?: boolean;
    /**
     * Идентификатор для систем автоматизированного тестирования
     */
    dataTestId?: string;
    /**
     * Управление неопределенным состоянием чекбокса
     */
    indeterminate?: boolean;
    /**
     * Отображение ошибки
     */
    error?: ReactNode | boolean;
    /**
     * Положение чекбокса относительно контента
     * @default start
     */
    controlPosition?: 'start' | 'end';
    /**
     * Позиция чекбокса относительно контента
     * @default 'before'
     * @deprecated Используйте prop `controlPosition`
     */
    position?: 'before' | 'after';
    /**
     * Флаг для скрытия нативного инпута.
     * @default false
     */
    hiddenInput?: boolean;
    /**
     * Реф на инпут
     */
    inputRef?: RefObject<HTMLInputElement>;
    /**
     * Пропсы для label
     */
    labelProps?: DetailedHTMLProps<LabelHTMLAttributes<HTMLLabelElement>, HTMLLabelElement>;
    /**
     * Набор цветов для компонента
     * @default default
     */
    colors?: 'default' | 'inverted';
};
export declare const Checkbox: React.ForwardRefExoticComponent<Omit<NativeProps, "size" | "onChange" | "enterKeyHint"> & {
    /**
     * Управление состоянием вкл/выкл чекбокса (native prop)
     */
    checked?: boolean;
    /**
     * Обработчик переключения чекбокса
     */
    onChange?: (event: ChangeEvent<HTMLInputElement>, payload: {
        checked: boolean;
        name?: string;
    }) => void;
    /**
     * Текст подписи к чекбоксу
     */
    label?: ReactNode;
    /**
     * Текст подсказки снизу
     */
    hint?: ReactNode;
    /**
     * Размер компонента
     * @default 20
     */
    size?: 20 | 24;
    /**
     * Компактный текст подписи Только для `size=20`
     * @default false
     */
    compact?: boolean;
    /**
     * Доп. класс чекбокса
     */
    boxClassName?: string;
    /**
     * Доп. класс контента
     */
    contentClassName?: string;
    /**
     * Доп. класс лейбла
     */
    labelClassName?: string;
    /**
     * Доп. класс подсказки
     */
    hintClassName?: string;
    /**
     * Доп. класс ошибки
     */
    errorClassName?: string;
    /**
     * Доп. класс дополнительного слота
     */
    addonsClassName?: string;
    /**
     * Выравнивание
     */
    align?: Align;
    /**
     * Дополнительный слот
     */
    addons?: ReactNode;
    /**
     * Растягивать ли компонент на всю ширину
     */
    block?: boolean;
    /**
     * Управление состоянием включен / выключен
     */
    disabled?: boolean;
    /**
     * Идентификатор для систем автоматизированного тестирования
     */
    dataTestId?: string;
    /**
     * Управление неопределенным состоянием чекбокса
     */
    indeterminate?: boolean;
    /**
     * Отображение ошибки
     */
    error?: ReactNode | boolean;
    /**
     * Положение чекбокса относительно контента
     * @default start
     */
    controlPosition?: "start" | "end";
    /**
     * Позиция чекбокса относительно контента
     * @default 'before'
     * @deprecated Используйте prop `controlPosition`
     */
    position?: "before" | "after";
    /**
     * Флаг для скрытия нативного инпута.
     * @default false
     */
    hiddenInput?: boolean;
    /**
     * Реф на инпут
     */
    inputRef?: RefObject<HTMLInputElement>;
    /**
     * Пропсы для label
     */
    labelProps?: DetailedHTMLProps<LabelHTMLAttributes<HTMLLabelElement>, HTMLLabelElement>;
    /**
     * Набор цветов для компонента
     * @default default
     */
    colors?: "default" | "inverted";
} & React.RefAttributes<HTMLLabelElement>>;
export {};
