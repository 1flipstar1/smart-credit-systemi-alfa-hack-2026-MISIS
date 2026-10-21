import { type FC, type ReactNode } from 'react';
export type ContentProps = {
    /**
     * Контент
     */
    children?: ReactNode;
    /**
     * Дополнительный класс
     */
    className?: string;
    /**
     * Идентификатор для систем автоматизированного тестирования
     */
    dataTestId?: string;
};
export declare const Content: FC<ContentProps>;
