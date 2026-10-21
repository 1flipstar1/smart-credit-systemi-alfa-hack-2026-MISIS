import React, { type ReactNode } from 'react';
export type KeyPadProps = {
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
};
export declare const KeyPad: React.FC<KeyPadProps>;
