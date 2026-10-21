import React from 'react';
export interface ActionTextAddonProps extends React.HTMLAttributes<HTMLButtonElement> {
    /**
     * Текст после иконки
     */
    text: string;
    /**
     * Тип действия
     */
    action?: 'primary' | 'secondary';
    /**
     * Дополнительный класс
     */
    className?: string;
    /**
     * Обработчик клика
     */
    onClick?: () => void;
    /**
     * Идентификатор для систем автоматизированного тестирования.
     */
    dataTestId?: string;
}
export declare const ActionTextAddon: React.FC<ActionTextAddonProps>;
