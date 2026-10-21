import React, { type ComponentType, type FC, type ReactNode } from 'react';
import { type OverlayProps } from './components';
export type DropzoneProps = {
    /**
     * Дополнительный класс
     */
    className?: string;
    /**
     * Дополнительный класс для контента
     */
    contentClassName?: string;
    /**
     * Подпись для заглушки
     */
    text?: string;
    /**
     * Заблокированное состояние
     */
    disabled?: boolean;
    /**
     * Состояние ошибки
     */
    error?: boolean;
    /**
     * Растягивать ли компонент на всю ширину
     */
    block?: boolean;
    /**
     * Компонент оверлея
     */
    Overlay?: ComponentType<OverlayProps>;
    /**
     * Обработчик события 'drop'
     */
    onDrop?: (files: File[]) => void;
    /**
     * Обработчик события 'dragover'
     */
    onDragOver?: (event: React.DragEvent<HTMLElement>) => void;
    /**
     * Обработчик события 'dragleave'
     */
    onDragLeave?: (event: React.DragEvent<HTMLElement>) => void;
    /**
     * Обработчик события 'dragenter'
     */
    onDragEnter?: (event: React.DragEvent<HTMLElement>) => void;
    /**
     * Идентификатор для систем автоматизированного тестирования
     */
    dataTestId?: string;
    /**
     * Дочерние элементы.
     */
    children?: ReactNode;
};
export declare const Dropzone: FC<DropzoneProps>;
