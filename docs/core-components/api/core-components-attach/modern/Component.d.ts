import React, { type ButtonHTMLAttributes, type ChangeEvent, type InputHTMLAttributes, type MouseEvent } from 'react';
import { type ButtonProps } from '@alfalab/core-components-button/modern';
export type AttachProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'size' | 'type' | 'value' | 'defaultValue' | 'onChange' | 'multiple' | 'enterKeyHint'> & {
    /**
     * Содержимое кнопки для выбора файла
     * @default 'Выберите файл'
     */
    buttonContent?: React.ReactNode;
    /**
     * Свойства для кнопки
     */
    buttonProps?: ButtonProps & ButtonHTMLAttributes<HTMLButtonElement>;
    /**
     * Дополнительный класс
     */
    className?: string;
    /**
     * Дополнительный класс для блока с файлами
     */
    fileClassName?: string;
    /**
     * Дополнительный класс для блока с подсказкой, когда файл не загружен
     */
    noFileClassName?: string;
    /**
     * Число символов, после которого имя файла будет обрезаться
     */
    maxFilenameLength?: number;
    /**
     * Текст для случая, когда файл не загружен
     * @default 'Нет файла'
     */
    noFileText?: string;
    /**
     * Процент выполнения загрузки файла
     */
    progressBarPercent?: number;
    /**
     * Размер компонента
     * @default 48
     */
    size?: 32 | 40 | 48 | 56 | 64;
    /**
     * Возможность прикрепления нескольких файлов
     */
    multiple?: boolean;
    /**
     * Содержимое поля ввода. Принимает массив объектов типа File или null.
     */
    value?: File[] | null;
    /**
     * Содержимое поля ввода, указанное по умолчанию. Принимает массив объектов типа File или null.
     */
    defaultValue?: File[] | null;
    /**
     * Обработчик поля ввода
     */
    onChange?: (event: ChangeEvent<HTMLInputElement>, payload: {
        files: File[];
    }) => void;
    /**
     * Обработчик нажатия на кнопку очистки
     */
    onClear?: (event: MouseEvent<HTMLButtonElement>) => void;
    /**
     * Идентификатор для систем автоматизированного тестирования
     */
    dataTestId?: string;
};
export declare const Attach: React.ForwardRefExoticComponent<Omit<React.InputHTMLAttributes<HTMLInputElement>, "size" | "type" | "value" | "defaultValue" | "onChange" | "multiple" | "enterKeyHint"> & {
    /**
     * Содержимое кнопки для выбора файла
     * @default 'Выберите файл'
     */
    buttonContent?: React.ReactNode;
    /**
     * Свойства для кнопки
     */
    buttonProps?: ButtonProps & ButtonHTMLAttributes<HTMLButtonElement>;
    /**
     * Дополнительный класс
     */
    className?: string;
    /**
     * Дополнительный класс для блока с файлами
     */
    fileClassName?: string;
    /**
     * Дополнительный класс для блока с подсказкой, когда файл не загружен
     */
    noFileClassName?: string;
    /**
     * Число символов, после которого имя файла будет обрезаться
     */
    maxFilenameLength?: number;
    /**
     * Текст для случая, когда файл не загружен
     * @default 'Нет файла'
     */
    noFileText?: string;
    /**
     * Процент выполнения загрузки файла
     */
    progressBarPercent?: number;
    /**
     * Размер компонента
     * @default 48
     */
    size?: 32 | 40 | 48 | 56 | 64;
    /**
     * Возможность прикрепления нескольких файлов
     */
    multiple?: boolean;
    /**
     * Содержимое поля ввода. Принимает массив объектов типа File или null.
     */
    value?: File[] | null;
    /**
     * Содержимое поля ввода, указанное по умолчанию. Принимает массив объектов типа File или null.
     */
    defaultValue?: File[] | null;
    /**
     * Обработчик поля ввода
     */
    onChange?: (event: ChangeEvent<HTMLInputElement>, payload: {
        files: File[];
    }) => void;
    /**
     * Обработчик нажатия на кнопку очистки
     */
    onClear?: (event: MouseEvent<HTMLButtonElement>) => void;
    /**
     * Идентификатор для систем автоматизированного тестирования
     */
    dataTestId?: string;
} & React.RefAttributes<HTMLInputElement>>;
