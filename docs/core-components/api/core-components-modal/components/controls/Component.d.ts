import React, { type ReactNode } from 'react';
export interface ControlsProps {
    /**
     * Основной слот
     */
    primary?: ReactNode;
    /**
     * Дополнительный слот
     */
    secondary?: ReactNode;
    /**
     * Выравнивание элементов футера
     * @default start
     */
    layout?: 'start' | 'center' | 'space-between' | 'column';
    /**
     * Выравнивание элементов футера (мобильный view)
     * @default start
     */
    mobileLayout?: 'start' | 'center' | 'space-between' | 'column';
    /**
     * Отступы между элементами футера
     */
    gap?: 16 | 24 | 32;
}
export declare const Controls: React.FC<ControlsProps>;
