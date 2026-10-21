import { type FC } from 'react';
import { type PaginationProps as CorePaginationProps } from '@alfalab/core-components-pagination/cssm';
export type PaginationProps = CorePaginationProps & {
    /**
     * Количество строк на страницу
     */
    perPage?: number;
    /**
     * Возможные варианты разбивки
     */
    possiblePerPage?: number[];
    /**
     * Обработчик переключения perPage
     */
    onPerPageChange?: (perPage: number) => void;
    /**
     * Скрывает переключатель количества строк на страницу
     */
    hidePerPageSelect?: boolean;
    /**
     * Идентификатор для систем автоматизированного тестирования
     */
    dataTestId?: string;
};
export declare const Pagination: FC<PaginationProps>;
