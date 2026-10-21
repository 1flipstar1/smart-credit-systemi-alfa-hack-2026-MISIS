import React, { type ChangeEvent, type InputHTMLAttributes, type ReactNode } from 'react';
import { type Colors } from './types/colors';
type Align = 'start' | 'center';
export type SwitchProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'type' | 'hint' | 'onChange' | 'disabled' | 'enterKeyHint' | 'size'> & {
    /**
     * Управление состоянием вкл/выкл компонента
     */
    checked?: boolean;
    /**
     * Текст подписи к переключателю
     */
    label?: ReactNode;
    /**
     * Текст подсказки снизу
     */
    hint?: ReactNode;
    /**
     * Размер компонента
     * @default 24
     */
    size?: 20 | 24;
    /**
     * Компактный текст подписи . Только для `size=20`
     * @default false
     */
    compact?: boolean;
    /**
     * Положение переключателя относительно контента
     * @default start
     */
    controlPosition?: 'start' | 'end';
    /**
     * Переключатель будет отрисован справа от контента
     * @deprecated Используйте prop controlPosition`
     */
    reversed?: boolean;
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
     * Управление состоянием включен / выключен
     */
    disabled?: boolean;
    /**
     * Отображение ошибки
     */
    error?: ReactNode | boolean;
    /**
     * Обработчик переключения компонента
     */
    onChange?: (event: ChangeEvent<HTMLInputElement>, payload: {
        checked: boolean;
        name: InputHTMLAttributes<HTMLInputElement>['name'];
    }) => void;
    /**
     * Идентификатор для систем автоматизированного тестирования
     */
    dataTestId?: string;
    /**
     * Набор цветов для компонента
     * @default default
     */
    colors?: Colors;
    /**
     * Показать скелетон
     * @default false
     */
    showSkeleton?: boolean;
};
export declare const Switch: React.ForwardRefExoticComponent<Omit<React.InputHTMLAttributes<HTMLInputElement>, "type" | "hint" | "onChange" | "disabled" | "enterKeyHint" | "size"> & {
    /**
     * Управление состоянием вкл/выкл компонента
     */
    checked?: boolean;
    /**
     * Текст подписи к переключателю
     */
    label?: ReactNode;
    /**
     * Текст подсказки снизу
     */
    hint?: ReactNode;
    /**
     * Размер компонента
     * @default 24
     */
    size?: 20 | 24;
    /**
     * Компактный текст подписи . Только для `size=20`
     * @default false
     */
    compact?: boolean;
    /**
     * Положение переключателя относительно контента
     * @default start
     */
    controlPosition?: "start" | "end";
    /**
     * Переключатель будет отрисован справа от контента
     * @deprecated Используйте prop controlPosition`
     */
    reversed?: boolean;
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
     * Управление состоянием включен / выключен
     */
    disabled?: boolean;
    /**
     * Отображение ошибки
     */
    error?: ReactNode | boolean;
    /**
     * Обработчик переключения компонента
     */
    onChange?: (event: ChangeEvent<HTMLInputElement>, payload: {
        checked: boolean;
        name: InputHTMLAttributes<HTMLInputElement>["name"];
    }) => void;
    /**
     * Идентификатор для систем автоматизированного тестирования
     */
    dataTestId?: string;
    /**
     * Набор цветов для компонента
     * @default default
     */
    colors?: Colors;
    /**
     * Показать скелетон
     * @default false
     */
    showSkeleton?: boolean;
} & React.RefAttributes<HTMLLabelElement>>;
export {};
