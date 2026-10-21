import React from 'react';
import { type SingleCommonProps, type Size } from '../../typings';
export interface TextProps extends Pick<SingleCommonProps, 'textColor'> {
    /**
     * Кнопка показать номер карты
     */
    eyeButton?: boolean;
    /**
     * Размер
     */
    size?: Size;
    /**
     * Дополнительный класс
     */
    className?: string;
    /**
     * Имя владельца карты в верхнем регистре
     */
    cardholderNameUppercase?: boolean;
    /**
     * Имя владельца карты
     */
    cardholderName?: string;
    /**
     * Номер карты
     */
    cardNumber?: number;
    /**
     * (Устаревший) Количество карт
     * @deprecated Используйте 'numberOfCards'
     */
    numberOfСards?: number;
    /**
     * Количество карт
     */
    numberOfCards?: number;
    /**
     * Управление ориентацией стопки карт компонента
     */
    align?: 'bottom' | 'default';
    /**
     * Обработчик клика по иконке 'показать номер карты'
     */
    onEyeIconClick?: () => void;
    /**
     * Идентификатор для систем автоматизированного тестирования.
     */
    dataTestId?: string;
}
export declare const Text: React.FC<TextProps>;
