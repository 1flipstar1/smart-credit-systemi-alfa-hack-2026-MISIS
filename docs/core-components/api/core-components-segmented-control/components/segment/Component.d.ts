import React, { type ReactNode } from 'react';
import { type IDType } from '../../typing';
export interface SegmentProps {
    /**
     * Дополнительный className
     */
    className?: string;
    /**
     * Дополнительный className для контента сегмента
     */
    contentClassName?: string;
    /**
     * ID сегмента
     */
    id: IDType;
    /**
     * Заголовок сегмента
     */
    title: ReactNode;
    /**
     * Контент выбранного сегмента
     */
    children?: ReactNode;
    /**
     * Идентификатор для систем автоматизированного тестирования
     */
    dataTestId?: string;
}
export declare const Segment: React.ForwardRefExoticComponent<SegmentProps & React.RefAttributes<HTMLButtonElement>>;
