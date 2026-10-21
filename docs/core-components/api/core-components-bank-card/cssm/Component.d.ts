import React, { type ChangeEvent, type MouseEvent, type ReactNode } from 'react';
import { type MaskType } from './types';
export type BankCardProps = {
    /**
     * Дополнительный класс
     */
    className?: string;
    /**
     * Цвет фона карты
     */
    backgroundColor?: string;
    /**
     * Иконка логотипа банка (размер L)
     */
    bankLogo?: ReactNode;
    /**
     * Лэйбл поля ввода
     */
    inputLabel?: string;
    /**
     * Значение поля ввода
     */
    value?: string;
    /**
     * Обработчик ввода
     */
    onChange?: (event: ChangeEvent<HTMLInputElement>, payload: {
        value: string;
    }) => void;
    /**
     * Обработчик вызова камеры
     */
    onUsePhoto?: (event: MouseEvent<HTMLButtonElement>) => void;
    /**
     * Идентификатор для систем автоматизированного тестирования
     */
    dataTestId?: string;
    /**
     * Тип вводимой маски. Позволяет устанавливать необходимый тип номера (номер карты или номер счёта)
     * Если параметр не передавать - работает с обоими типами номеров
     */
    maskType?: MaskType;
};
export declare const BankCard: React.ForwardRefExoticComponent<BankCardProps & React.RefAttributes<HTMLInputElement>>;
