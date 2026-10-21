import React from 'react';
import { type OptionProps, type OptionShape } from '../../typings';
import 'intersection-observer';
type OptionsFetcherResponse = {
    options: OptionShape[];
    hasMore: boolean;
};
type useLazyLoadingProps = {
    /** Количество элементов на "странице" */
    limit?: number;
    /** Начальный номер "страницы" */
    initialOffset?: number;
    /** Скелетон загружаемых элементов */
    skeleton?: React.ReactNode;
    /** Компонент пункта меню */
    Option?: React.FC<OptionProps>;
    /**
     * Функция-загрузчик опций.
     * @param offset - текущая страница
     * @param limit - количество элементов на странице
     * @param queryString - строчные данные, пробрасываемые для поиска из кастомного инпута, расположенного в заголовке OptionsList
     * @returns Promise<{
     *  options - список опций следующей "страницы". Они аппендятся к предыдущим
     *  hasMore - указывает, есть ли еще незагруженные элементы (в случае false перестает загружать "следующую страницу")
     * }>
     */
    optionsFetcher(offset: number, limit: number, queryString?: string): Promise<OptionsFetcherResponse>;
};
export declare function useLazyLoading({ limit, initialOffset, optionsFetcher, skeleton, Option, }: useLazyLoadingProps): {
    optionsProps: {
        Option: (props: OptionProps) => React.JSX.Element;
        options: OptionShape[];
        optionsListProps: {
            ref: React.RefObject<HTMLDivElement>;
            inputProps: {
                onChange: (event: React.ChangeEvent<HTMLInputElement>, payload: {
                    value: string;
                }) => void;
                value: string;
            };
        };
        onOpen: (payload: {
            open?: boolean;
        }) => void;
    };
    reset: () => void;
};
export {};
