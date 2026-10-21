import { type AnyObject, type BaseSelectProps, type OptionShape } from '../../typings';
export type UseSelectWithApplyProps = {
    /**
     * Список выбранных пунктов
     */
    selected: BaseSelectProps['selected'];
    /**
     * Список вариантов выбора
     */
    options: BaseSelectProps['options'];
    /**
     * Обработчик выбора
     */
    onChange: BaseSelectProps['onChange'];
    /**
     * Дополнительный обработчик клика на чекбокс выбрать все
     */
    onSelectAllClick?: (selectedMultiple: OptionShape[]) => void;
    /**
     * Компонент выпадающего меню
     */
    OptionsList?: BaseSelectProps['OptionsList'];
    /**
     * Пропсы, которые будут прокинуты в компонент списка
     */
    optionsListProps?: BaseSelectProps['optionsListProps'];
    /**
     * Включает отображение поиска
     */
    showSearch?: BaseSelectProps['showSearch'];
    /**
     *  Настройки поиска
     */
    searchProps?: BaseSelectProps['searchProps'];
    /**
     * Показывать кнопку очистки
     */
    showClear?: boolean;
    /**
     * Показывать пункт "Выбрать все"
     */
    showSelectAll?: boolean;
    /**
     * Показывать пункт "Выбрать все" в заголовке списка
     */
    showHeaderWithSelectAll?: boolean;
    /**
     * Значение name при применении выбора
     * @default 'apply-footer'
     */
    applyName?: string;
    /**
     * Значение name при сбросе выбора
     * @default 'reset-footer'
     */
    resetName?: string;
    /**
     * Позиция чекбокса "Выбрать все" в Header
     * @default 'before'
     */
    checkmarkPosition?: 'before' | 'after';
};
export declare function useSelectWithApply({ options, selected, onChange, onSelectAllClick, OptionsList, optionsListProps, showClear, showSelectAll, showHeaderWithSelectAll, checkmarkPosition, showSearch, searchProps, applyName, resetName, }: UseSelectWithApplyProps): {
    OptionsList: import("react").ForwardRefExoticComponent<Pick<import("../../typings").SelectProps, "client"> & {
        className?: string;
        optionGroupClassName?: string;
        scrollbarClassName?: string;
        footerClassName?: string;
        size?: 40 | 48 | 56 | 64 | 72;
        Option: import("react").ComponentType<import("../../typings").OptionProps>;
        getOptionProps: (option: OptionShape, index: number) => import("../../typings").OptionProps;
        groupOptionProps?: AnyObject;
        selectedItems?: OptionShape[];
        setSelectedItems: (selected: OptionShape[]) => void;
        toggleMenu: () => void;
        header?: import("react").ReactNode;
        footer?: import("react").ReactNode;
        options?: Array<OptionShape | import("../../typings").GroupShape>;
        flatOptions?: OptionShape[];
        highlightedIndex?: number;
        open?: boolean;
        Optgroup?: BaseSelectProps["Optgroup"];
        emptyPlaceholder?: import("react").ReactNode;
        visibleOptions?: number;
        onScroll?: (event: import("react").MouseEvent<HTMLDivElement>) => void;
        dataTestId?: string;
        inputProps?: import("@alfalab/core-components-input").InputProps;
        showFooter?: boolean;
        nativeScrollbar?: boolean;
        optionsListWidth?: BaseSelectProps["optionsListWidth"];
        onApply?: () => void;
        onClear?: () => void;
        setHighlightedIndex?: (index: number) => void;
        search?: string;
        multiple?: boolean;
        limitDynamicOptionGroupSize?: BaseSelectProps["limitDynamicOptionGroupSize"];
        scrollableNodeClassName?: string;
        contentNodeClassName?: string;
        listNodeClassName?: string;
        ctrlRef?: import("react").Ref<import("../../typings").OptionsListController>;
    } & {
        showClear?: boolean;
        onClose?: () => void;
        selectedDraft?: OptionShape[];
        OptionsList?: import("react").FC<import("../../typings").OptionsListProps & import("react").RefAttributes<HTMLDivElement>>;
        Footer?: import("react").FC<import("./options-list-with-apply/footer/Component").FooterProps>;
        Header?: import("react").FC<import("./options-list-with-apply/header/Component").HeaderProps>;
        headerProps?: import("./options-list-with-apply/header/Component").HeaderProps;
        showHeaderWithSelectAll?: boolean;
        setSelectedDraft?: (selectedDraft: OptionShape[]) => void;
    } & import("react").RefAttributes<HTMLDivElement>>;
    optionsListProps: {
        OptionsList: import("react").ComponentType<Pick<import("../../typings").SelectProps, "client"> & {
            className?: string;
            optionGroupClassName?: string;
            scrollbarClassName?: string;
            footerClassName?: string;
            size?: 40 | 48 | 56 | 64 | 72;
            Option: import("react").ComponentType<import("../../typings").OptionProps>;
            getOptionProps: (option: OptionShape, index: number) => import("../../typings").OptionProps;
            groupOptionProps?: AnyObject;
            selectedItems?: OptionShape[];
            setSelectedItems: (selected: OptionShape[]) => void;
            toggleMenu: () => void;
            header?: import("react").ReactNode;
            footer?: import("react").ReactNode;
            options?: Array<OptionShape | import("../../typings").GroupShape>;
            flatOptions?: OptionShape[];
            highlightedIndex?: number;
            open?: boolean;
            Optgroup?: BaseSelectProps["Optgroup"];
            emptyPlaceholder?: import("react").ReactNode;
            visibleOptions?: number;
            onScroll?: (event: import("react").MouseEvent<HTMLDivElement>) => void;
            dataTestId?: string;
            inputProps?: import("@alfalab/core-components-input").InputProps;
            showFooter?: boolean;
            nativeScrollbar?: boolean;
            optionsListWidth?: BaseSelectProps["optionsListWidth"];
            onApply?: () => void;
            onClear?: () => void;
            setHighlightedIndex?: (index: number) => void;
            search?: string;
            multiple?: boolean;
            limitDynamicOptionGroupSize?: BaseSelectProps["limitDynamicOptionGroupSize"];
            scrollableNodeClassName?: string;
            contentNodeClassName?: string;
            listNodeClassName?: string;
            ctrlRef?: import("react").Ref<import("../../typings").OptionsListController>;
        } & import("react").RefAttributes<HTMLDivElement>> | undefined;
        showClear: boolean;
        onClear: () => void;
        onApply: () => void;
        onClose: () => void;
        selectedDraft: OptionShape[];
        setSelectedDraft: (items: OptionShape[]) => void;
        showHeaderWithSelectAll: boolean;
        headerProps: any;
    };
    multiple: boolean;
    options: (OptionShape | import("../../typings").GroupShape | {
        key: string;
        content: string;
    })[];
    onChange: (payload: import("../../typings").BaseSelectChangePayload) => void;
    selected: string | OptionShape | (string | OptionShape)[] | null | undefined;
    showSearch: boolean;
    searchProps: {
        value: string;
        onChange: ((value: string) => void) | undefined;
        componentProps?: import("../../typings").SearchProps;
        accessor?: (option: OptionShape) => string;
        filterFn?: (optionText: string, search: string) => boolean;
        filterGroup?: boolean;
        groupAccessor?: (group: import("../../typings").GroupShape) => string | undefined;
    } | undefined;
    originalProps: {
        options: (OptionShape | import("../../typings").GroupShape)[];
        selected: string | OptionShape | (string | OptionShape)[] | null | undefined;
        onChange: (payload: import("../../typings").BaseSelectChangePayload) => void;
        OptionsList: import("react").ComponentType<Pick<import("../../typings").SelectProps, "client"> & {
            className?: string;
            optionGroupClassName?: string;
            scrollbarClassName?: string;
            footerClassName?: string;
            size?: 40 | 48 | 56 | 64 | 72;
            Option: import("react").ComponentType<import("../../typings").OptionProps>;
            getOptionProps: (option: OptionShape, index: number) => import("../../typings").OptionProps;
            groupOptionProps?: AnyObject;
            selectedItems?: OptionShape[];
            setSelectedItems: (selected: OptionShape[]) => void;
            toggleMenu: () => void;
            header?: import("react").ReactNode;
            footer?: import("react").ReactNode;
            options?: Array<OptionShape | import("../../typings").GroupShape>;
            flatOptions?: OptionShape[];
            highlightedIndex?: number;
            open?: boolean;
            Optgroup?: BaseSelectProps["Optgroup"];
            emptyPlaceholder?: import("react").ReactNode;
            visibleOptions?: number;
            onScroll?: (event: import("react").MouseEvent<HTMLDivElement>) => void;
            dataTestId?: string;
            inputProps?: import("@alfalab/core-components-input").InputProps;
            showFooter?: boolean;
            nativeScrollbar?: boolean;
            optionsListWidth?: BaseSelectProps["optionsListWidth"];
            onApply?: () => void;
            onClear?: () => void;
            setHighlightedIndex?: (index: number) => void;
            search?: string;
            multiple?: boolean;
            limitDynamicOptionGroupSize?: BaseSelectProps["limitDynamicOptionGroupSize"];
            scrollableNodeClassName?: string;
            contentNodeClassName?: string;
            listNodeClassName?: string;
            ctrlRef?: import("react").Ref<import("../../typings").OptionsListController>;
        } & import("react").RefAttributes<HTMLDivElement>> | undefined;
        optionsListProps: unknown;
        showClear: boolean;
        showSelectAll: boolean;
        showHeaderWithSelectAll: boolean;
        checkmarkPosition: "before" | "after";
        showSearch: boolean;
        searchProps: {
            componentProps?: import("../../typings").SearchProps;
            accessor?: (option: OptionShape) => string;
            filterFn?: (optionText: string, search: string) => boolean;
            value?: string;
            onChange?: (value: string) => void;
            filterGroup?: boolean;
            groupAccessor?: (group: import("../../typings").GroupShape) => string | undefined;
        };
        applyName: string;
        resetName: string;
    };
};
