import React, { type ReactNode } from 'react';
export interface KeyPadProps {
    /**
     * Показать кнопку "очистить".
     */
    showClear: boolean;
    /**
     * Слот слева.
     */
    leftAddons?: ReactNode;
    /**
     * Слот справа.
     */
    rightAddons?: ReactNode;
    /**
     * Заголовок для правого слота
     */
    rightAddonsTitle?: string;
    /**
     * Идентификатор для автоматизированного тестирования.
     */
    dataTestId?: string;
    /**
     * Коллбэк нажатия на кнопку.
     */
    onClick: (digit: number) => void;
    /**
     * Коллбэк очистки кода.
     */
    onClear: () => void;
}
export declare const KeyPad: React.FC<KeyPadProps>;
