import React, { type ElementType, type HTMLAttributeAnchorTarget, type MouseEvent, type ReactNode } from 'react';
export type FileStatuses = 'ERROR' | 'SUCCESS' | 'LOADING' | 'UPLOADING';
export type FileUploadItemProps = {
    /**
     * Дополнительный класс
     */
    className?: string;
    /**
     * Идентификатор элемента
     */
    id?: string;
    /**
     * Имя файла с расширением
     */
    name?: string;
    /**
     * Размер файла
     */
    size?: string | number;
    /**
     * Дата загрузки файла
     */
    uploadDate?: string;
    /**
     * Ссылка на файл. Если прокидывается этот параметр, то появляется кнопка скачивания
     */
    downloadLink?: string;
    /**
     * Рекомендует браузеру скачивать контент по ссылке.
     * В проп может быть передано рекомендуемое название скачиваемого файла.
     */
    download?: string | true;
    /**
     * Отображение кнопки удаления
     */
    showDelete?: boolean;
    /**
     * Отображение кнопки восстановления
     */
    showRestore?: boolean;
    /**
     * Процент загрузки файла
     */
    uploadPercent?: number;
    /**
     * Статус загрузки файла
     */
    uploadStatus?: FileStatuses;
    /**
     * Сообщение об ошибке
     */
    error?: ReactNode;
    /**
     * Дочерние элементы
     */
    children?: React.ReactNode;
    /**
     * Компонент кастомной иконки
     */
    icon?: ElementType<{
        className?: string;
    }>;
    /**
     * Обработчик загрузки файла
     */
    onDownload?: (id: string) => void;
    /**
     * Обработчик удаления файла
     */
    onDelete?: (id: string, event?: MouseEvent<HTMLElement>) => void;
    /**
     * Обработчик восстановления файла
     */
    onRestore?: (id: string) => void;
    /**
     * Управление активностью кнопок
     */
    disableButtons?: boolean;
    /**
     * Разрешить многострочное название файла
     */
    multiline?: boolean;
    /**
     * Указывает, где открыть скачиваемый документ
     */
    target?: HTMLAttributeAnchorTarget;
    /**
     * Идентификатор для систем автоматизированного тестирования
     */
    dataTestId?: string;
};
export declare const FileUploadItemV1: React.FC<FileUploadItemProps>;
