import React from 'react';
export interface ActionIconAddonProps extends React.HTMLAttributes<HTMLButtonElement> {
    /**
     * Тип действия
     */
    action?: 'back' | 'floatingBack' | 'close';
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
export declare const ActionIconAddon: React.FC<ActionIconAddonProps>;
