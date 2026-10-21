import React, { type ButtonHTMLAttributes, type ElementType, type FC } from 'react';
import { type IconButtonProps } from '@alfalab/core-components-icon-button';
export interface CloserProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    /**
     * Вид компонента
     */
    view: 'desktop' | 'mobile';
    /**
     * Дополнительный класс
     */
    className?: string;
    /**
     * Позиция крестика
     */
    align?: 'left' | 'right';
    /**
     * Фиксирует крестик
     */
    sticky?: boolean;
    /**
     * Иконка
     */
    icon?: ElementType;
    /**
     * Набор цветов для компонента
     */
    colors?: IconButtonProps['colors'];
    /**
     * Идентификатор для систем автоматизированного тестирования
     */
    dataTestId?: string;
    /**
     * Коллбэк закрытия.
     */
    onClose?: (event: React.MouseEvent<HTMLElement> | React.KeyboardEvent<HTMLElement>, reason?: 'backdropClick' | 'escapeKeyDown' | 'closerClick') => void;
}
export declare const Closer: FC<CloserProps>;
