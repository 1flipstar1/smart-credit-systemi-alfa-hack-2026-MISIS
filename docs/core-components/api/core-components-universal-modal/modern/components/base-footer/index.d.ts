import React, { type ReactNode } from 'react';
export interface FooterProps {
    /**
     * Контент футера
     */
    children?: ReactNode;
    /**
     * Дополнительный класс
     */
    className?: string;
    /**
     * Фиксирует футер
     */
    sticky?: boolean;
    /**
     * Выравнивание элементов футера
     */
    layout?: 'start' | 'center' | 'space-between' | 'column';
    /**
     * Идентификатор для систем автоматизированного тестирования
     */
    dataTestId?: string;
    /**
     * Отбивка бордером
     */
    isHighlighted?: boolean;
}
export declare const BaseFooter: React.ForwardRefExoticComponent<FooterProps & React.RefAttributes<HTMLDivElement>>;
