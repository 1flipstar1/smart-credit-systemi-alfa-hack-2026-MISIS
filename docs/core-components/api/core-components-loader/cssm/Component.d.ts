import React from 'react';
export type LoaderProps = {
    /**
     * Дополнительный класс
     */
    className?: string;
    /**
     * Идентификатор для систем автоматизированного тестирования
     */
    dataTestId?: string;
};
/**
 * @deprecated Используйте Spinner
 */
export declare const Loader: React.FC<LoaderProps>;
