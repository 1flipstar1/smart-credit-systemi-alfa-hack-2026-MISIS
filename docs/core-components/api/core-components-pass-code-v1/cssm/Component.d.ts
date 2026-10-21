import React, { type ReactNode } from 'react';
export type BasePassCodeProps = {
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
     * Отображение ошибки
     */
    error?: ReactNode;
    /**
     *  Сообщение над клавиатурой
     */
    message?: ReactNode;
    /**
     * Слот слева.
     */
    leftAddons?: ReactNode;
    /**
     * Слот справа
     */
    rightAddons?: ReactNode;
    /**
     * Идентификатор для систем автоматизированного тестирования.
     * Для враппера используется модификатор -wrapper, ошибки -error,
     * сообщения над клавиатурой -message, блока с кодом -input-progress,
     * блока с цифрами -keypad
     */
    dataTestId?: string;
};
type PropsWithUnknownLen = {
    codeLength?: never;
    /**
     * Максимально возможная длина кода
     * @default 10
     */
    maxCodeLength?: number;
};
type PropsWithLen = {
    maxCodeLength?: never;
    /**
     * Длина кода
     */
    codeLength?: number;
};
type PassCodeProps = BasePassCodeProps & (PropsWithLen | PropsWithUnknownLen);
/**
 * @deprecated
 * Используйте PassCode
 */
export declare const PassCodeV1: React.ForwardRefExoticComponent<PassCodeProps & React.RefAttributes<HTMLDivElement>>;
export {};
