import React, { type ChangeEvent, type DetailedHTMLProps, type InputHTMLAttributes, type LabelHTMLAttributes, type ReactNode } from 'react';
type NativeProps = InputHTMLAttributes<HTMLInputElement>;
type Align = 'start' | 'center';
export type RadioProps = Omit<NativeProps, 'size' | 'type' | 'onChange' | 'checked' | 'disabled' | 'name' | 'className' | 'enterKeyHint'> & {
    /**
     * Идентификатор для систем автоматизированного тестирования
     */
    dataTestId?: string;
    /**
     * Текст подсказки снизу
     */
    hint?: ReactNode;
    /**
     * Текст подписи
     */
    label?: ReactNode;
    /**
     * Размер компонента
     * @default 20
     */
    size?: 20 | 24;
    /**
     * Компактный текст подписи. Только для `size=20`
     * @default false
     */
    compact?: boolean;
    /**
     * Положение радиокнопки относительно контента
     * @default start
     */
    controlPosition?: 'start' | 'end';
    /**
     * Управление состоянием отмечен/не отмечен
     */
    checked?: boolean;
    /**
     * Управление состоянием включен / выключен
     */
    disabled?: boolean;
    /**
     * Html аттрибут name инпута
     */
    name?: string;
    /**
     * Класс компонента
     */
    className?: string;
    /**
     * Доп. класс радио кнопки
     */
    circleClassName?: string;
    /**
     * Доп. класс контента
     */
    contentClassName?: string;
    /**
     * Выравнивание
     */
    align?: Align;
    /**
     * Дополнительный слот
     */
    addons?: React.ReactNode;
    /**
     * Растягивать ли компонент на всю ширину
     */
    block?: boolean;
    /**
     * Пропсы для label
     */
    labelProps?: DetailedHTMLProps<LabelHTMLAttributes<HTMLLabelElement>, HTMLLabelElement>;
    /**
     * Обработчик на выбор элемента
     */
    onChange?: (event: ChangeEvent<HTMLInputElement>, payload: {
        checked: boolean;
        name?: string;
    }) => void;
    /**
     * Набор цветов для компонента
     * @default default
     */
    colors?: 'default' | 'inverted';
};
export declare const Radio: React.ForwardRefExoticComponent<Omit<NativeProps, "size" | "type" | "onChange" | "checked" | "disabled" | "name" | "className" | "enterKeyHint"> & {
    /**
     * Идентификатор для систем автоматизированного тестирования
     */
    dataTestId?: string;
    /**
     * Текст подсказки снизу
     */
    hint?: ReactNode;
    /**
     * Текст подписи
     */
    label?: ReactNode;
    /**
     * Размер компонента
     * @default 20
     */
    size?: 20 | 24;
    /**
     * Компактный текст подписи. Только для `size=20`
     * @default false
     */
    compact?: boolean;
    /**
     * Положение радиокнопки относительно контента
     * @default start
     */
    controlPosition?: "start" | "end";
    /**
     * Управление состоянием отмечен/не отмечен
     */
    checked?: boolean;
    /**
     * Управление состоянием включен / выключен
     */
    disabled?: boolean;
    /**
     * Html аттрибут name инпута
     */
    name?: string;
    /**
     * Класс компонента
     */
    className?: string;
    /**
     * Доп. класс радио кнопки
     */
    circleClassName?: string;
    /**
     * Доп. класс контента
     */
    contentClassName?: string;
    /**
     * Выравнивание
     */
    align?: Align;
    /**
     * Дополнительный слот
     */
    addons?: React.ReactNode;
    /**
     * Растягивать ли компонент на всю ширину
     */
    block?: boolean;
    /**
     * Пропсы для label
     */
    labelProps?: DetailedHTMLProps<LabelHTMLAttributes<HTMLLabelElement>, HTMLLabelElement>;
    /**
     * Обработчик на выбор элемента
     */
    onChange?: (event: ChangeEvent<HTMLInputElement>, payload: {
        checked: boolean;
        name?: string;
    }) => void;
    /**
     * Набор цветов для компонента
     * @default default
     */
    colors?: "default" | "inverted";
} & React.RefAttributes<HTMLLabelElement>>;
export {};
