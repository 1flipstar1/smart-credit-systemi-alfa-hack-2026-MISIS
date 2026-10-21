import React, { type ReactNode } from 'react';
import { type PassCodeProps } from './typings';
export interface BasePassCodeProps {
    /**
     * Код
     */
    value: string;
    /**
     * Обработчик изменения кода
     */
    onChange: (code: string) => void;
    /**
     * Дополнительный класс
     */
    className?: string;
    /**
     * Отображение ошибки ввода
     */
    error?: boolean;
    /**
     * Отображение успешного ввода
     */
    success?: boolean;
    /**
     * Слот слева
     */
    leftAddons?: ReactNode;
    /**
     * Слот справа
     */
    rightAddons?: ReactNode;
    /**
     * Заголовок для правого слота
     */
    rightAddonsTitle?: string;
    /**
     * Идентификатор для систем автоматизированного тестирования.
     * Для враппера используется модификатор -wrapper, ошибки -error,
     * сообщения над клавиатурой -message, блока с кодом -input-progress,
     * блока с цифрами -keypad
     */
    dataTestId?: string;
    /**
     * Контрольная точка, с нее начинается desktop версия
     * @default 1024
     */
    breakpoint?: number;
    /**
     * Версия, которая будет использоваться при серверном рендеринге
     */
    client?: 'desktop' | 'mobile';
    /**
     * Значение по-умолчанию для хука useMatchMedia
     * @deprecated Используйте client
     */
    defaultMatchMediaValue?: boolean | (() => boolean);
    /**
     * Отключает ввод и удаление кода
     */
    disabled?: boolean;
}
export declare const PassCode: React.ForwardRefExoticComponent<PassCodeProps & React.RefAttributes<HTMLDivElement>>;
