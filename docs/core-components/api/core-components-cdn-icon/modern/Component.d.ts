import React, { type ReactNode } from 'react';
interface CDNIconProps {
    /**
     * Имя иконки
     */
    name: string;
    /**
     * Цвет иконки
     */
    color?: string;
    /**
     * Дополнительный класс
     */
    className?: string;
    /**
     * Базовый адрес cdn хранилища c иконками
     */
    baseUrl?: string;
    /**
     * Идентификатор для систем автоматизированного тестирования
     */
    dataTestId?: string;
    /**
     * Fallback на случай, если не удастся загрузить иконку
     */
    fallback?: ReactNode;
    /**
     * Callback, вызываемый при ошибке загрузки иконки
     */
    onError?: () => void;
}
export declare const CDNIcon: React.FC<CDNIconProps>;
export {};
