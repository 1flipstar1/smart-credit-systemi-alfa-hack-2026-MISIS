import React from 'react';
export type ListHeaderProps = {
    /**
     * Заголовок
     */
    title: string;
    /**
     * Дополнительное описание
     */
    description?: string;
    /**
     * Наличие фоновой подложки
     */
    filled?: boolean;
    /**
     * Дополнительный класс
     */
    className?: string;
    /**
     * Идентификатор для систем автоматизированного тестирования
     */
    dataTestId?: string;
};
export declare const ListHeader: React.FC<ListHeaderProps>;
