import { type FC, type ReactNode } from 'react';
export interface ContentProps {
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
}
export declare const BaseContent: FC<ContentProps>;
