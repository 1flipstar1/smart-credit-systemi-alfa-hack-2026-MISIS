import React, { type KeyboardEvent, type MouseEvent } from 'react';
import { type BaseModalProps } from '@alfalab/core-components-base-modal';
import { type CloserProps } from '@alfalab/core-components-navigation-bar-private/shared';
import { type PaddingType } from '@alfalab/core-components-types';
export type PopupSheetProps = Omit<BaseModalProps, 'onClose' | 'dataTestId'> & {
    /**
     * Наличие кнопки закрытия
     */
    hasCloser?: boolean;
    /**
     * Будет ли свайпаться шторка
     */
    swipeable?: boolean;
    /**
     * Отступы
     */
    padding?: PaddingType;
    /**
     * Обработчик закрытия
     */
    onClose?: (event: MouseEvent<HTMLElement> | KeyboardEvent<HTMLElement>, reason?: 'backdropClick' | 'escapeKeyDown' | 'closerClick' | 'swipe') => void;
    /**
     * Идентификатор для систем автоматизированного тестирования.
     * Для кнопки закрытия используется модификатор -closer
     */
    dataTestId?: string;
    /**
     * Дополнительные пропсы для компонента Closer.
     */
    closerProps?: Omit<CloserProps, 'view' | 'onClose'>;
};
export declare const PopupSheet: React.ForwardRefExoticComponent<Omit<BaseModalProps, "onClose" | "dataTestId"> & {
    /**
     * Наличие кнопки закрытия
     */
    hasCloser?: boolean;
    /**
     * Будет ли свайпаться шторка
     */
    swipeable?: boolean;
    /**
     * Отступы
     */
    padding?: PaddingType;
    /**
     * Обработчик закрытия
     */
    onClose?: (event: MouseEvent<HTMLElement> | KeyboardEvent<HTMLElement>, reason?: "backdropClick" | "escapeKeyDown" | "closerClick" | "swipe") => void;
    /**
     * Идентификатор для систем автоматизированного тестирования.
     * Для кнопки закрытия используется модификатор -closer
     */
    dataTestId?: string;
    /**
     * Дополнительные пропсы для компонента Closer.
     */
    closerProps?: Omit<CloserProps, "view" | "onClose">;
} & React.RefAttributes<HTMLDivElement>>;
