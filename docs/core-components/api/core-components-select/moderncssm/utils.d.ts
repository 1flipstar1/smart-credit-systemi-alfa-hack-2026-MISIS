import { type ReactNode, type RefObject } from 'react';
import { type BaseSelectProps, type GroupShape, type OptionShape, type OptionsListProps } from './typings';
export declare const isGroup: (item: OptionShape | GroupShape) => item is GroupShape;
export declare const isOptionShape: (item: OptionShape | string | null) => item is OptionShape;
export declare const joinOptions: ({ selected, selectedMultiple, valueSeparator, }: {
    selected?: OptionShape;
    selectedMultiple?: OptionShape[];
    valueSeparator?: string;
}) => ReactNode[] | null;
export declare function processOptions(options: BaseSelectProps['options'], selected?: BaseSelectProps['selected'], filterFn?: (option: OptionShape | GroupShape) => boolean, filterGroup?: boolean): {
    filteredOptions: (OptionShape | GroupShape)[];
    flatOptions: OptionShape[];
    selectedOptions: OptionShape[];
};
type useVisibleOptionsArgs = {
    /**
     * Количество видимых пунктов
     */
    visibleOptions: number;
    /**
     * Реф на контейнер с пунтами меню
     */
    listRef: RefObject<HTMLElement>;
    /**
     * Флаг открытия меню
     */
    open?: boolean;
    /**
     * Позволяет вызвать пересчет высоты
     */
    invalidate?: unknown;
    /**
     * Список вариантов выбора
     */
    options?: Array<OptionShape | GroupShape>;
    /**
     * Максимальный размер варианта выбора
     */
    size?: Extract<OptionsListProps['size'], number>;
    /**
     * Учитывать действительное число вариантов выбора
     */
    actualOptionsCount?: boolean;
};
export declare function useVirtualVisibleOptions({ visibleOptions, listRef, open, invalidate, options, size, actualOptionsCount, }: useVisibleOptionsArgs): number | undefined;
export declare function useVisibleOptions({ visibleOptions, listRef, open, options, size, actualOptionsCount, }: useVisibleOptionsArgs): readonly [false, number | undefined];
export declare function defaultFilterFn(optionText: string, search: string): boolean;
export declare function defaultGroupAccessor(option: GroupShape): string | undefined;
export declare function defaultAccessor(option: OptionShape): string;
export declare function usePrevious<T>(value: T): T | undefined;
export declare function getSelectTestIds(dataTestId: string): {
    select: string;
    option: string;
    optionsList: string;
    clearButton: string;
    applyButton: string;
    field: string;
    fieldFormControl: string;
    fieldLeftAddons: string;
    fieldRightAddons: string;
    fieldError: string;
    fieldHint: string;
    fieldClearIcon: string;
    searchInput: string;
    searchFormControl: string;
    searchInner: string;
    searchLeftAddons: string;
    searchRightAddons: string;
    searchError: string;
    searchHint: string;
    bottomSheet: string;
    bottomSheetHeader: string;
    bottomSheetContent: string;
    modal: string;
    modalHeader: string;
    modalContent: string;
};
export {};
