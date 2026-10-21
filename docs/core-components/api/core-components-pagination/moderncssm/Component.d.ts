import { type FC } from 'react';
export type PaginationProps = {
    /**
     * Текущая страница (с нуля)
     */
    currentPageIndex: number;
    /**
     * Количество страниц
     */
    pagesCount: number;
    /**
     * Дополнительный класс
     */
    className?: string;
    /**
     * Скрывает стрелки, если выбрана первая или последняя страница
     */
    hideArrows?: boolean;
    /**
     * Количество видимых страниц по бокам
     */
    sidePadding?: number;
    /**
     * Количество видимых страниц вокруг выбранной
     */
    activePadding?: number;
    /**
     * Режим пагинации
     */
    view?: 'default' | 'per-page';
    /**
     * Обработчик переключения страницы
     */
    onPageChange?: (pageIndex: number) => void;
    /**
     * Идентификатор для систем автоматизированного тестирования
     */
    dataTestId?: string;
};
export declare const Pagination: FC<PaginationProps>;
