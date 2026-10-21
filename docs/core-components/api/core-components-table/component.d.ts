import { Pagination, Table as TableComponent, TBody, TCell, TExpandableRow, THead, THeadCell, TRow, TSortableHeadCell } from './components';
export declare const Table: import("react").ForwardRefExoticComponent<import("react").TableHTMLAttributes<HTMLTableElement> & {
    compactView?: boolean;
    compactHorizontal?: boolean;
    className?: string;
    children: import("react").ReactElement | import("react").ReactElement[];
    wrapper?: boolean;
    pagination?: import("react").ReactNode;
    dataTestId?: string;
    stickyHeader?: boolean;
} & import("react").RefAttributes<HTMLTableElement>> & {
    TBody: import("react").ForwardRefExoticComponent<import("react").HTMLAttributes<HTMLTableSectionElement> & {
        className?: string;
        dataTestId?: string;
    } & import("react").RefAttributes<HTMLTableSectionElement>>;
    THead: import("react").FC<import("./components").THeadProps>;
    THeadCell: ({ children, className, dataTestId, style, width, textAlign, hidden, ...restProps }: import("./components").THeadCellProps) => import("react").JSX.Element | null;
    TSortableHeadCell: ({ children, className, defaultIsSortedDesc, isSortedDesc, textAlign, onSort, ...restProps }: import("./components").TSortableHeadCellProps) => import("react").JSX.Element;
    TCell: ({ className, style, dataTestId, children, index, ...restProps }: import("./components").TCellProps) => import("react").JSX.Element | null;
    TRow: import("react").ForwardRefExoticComponent<import("react").HTMLAttributes<HTMLTableRowElement> & {
        children: import("react").ReactElement<import("./components").TCellProps, ({ className, style, dataTestId, children, index, ...restProps }: import("./components").TCellProps) => import("react").JSX.Element | null> | import("react").ReactElement<import("./components").TCellProps, ({ className, style, dataTestId, children, index, ...restProps }: import("./components").TCellProps) => import("react").JSX.Element | null>[];
        className?: string;
        selected?: boolean;
        withoutBorder?: boolean;
        dataTestId?: string;
    } & import("react").RefAttributes<HTMLTableRowElement>>;
    TExpandableRow: import("react").ForwardRefExoticComponent<import("react").HTMLAttributes<HTMLTableRowElement> & {
        children: import("react").ReactElement<import("./components").TCellProps, ({ className, style, dataTestId, children, index, ...restProps }: import("./components").TCellProps) => import("react").JSX.Element | null> | import("react").ReactElement<import("./components").TCellProps, ({ className, style, dataTestId, children, index, ...restProps }: import("./components").TCellProps) => import("react").JSX.Element | null>[];
        className?: string;
        selected?: boolean;
        withoutBorder?: boolean;
        dataTestId?: string;
    } & {
        defaultExpanded?: boolean;
        expanded?: boolean;
        onToggle?: (expanded: boolean) => void;
        renderContent: (expanded: boolean) => import("react").ReactNode;
        rowRef?: import("react").Ref<HTMLTableRowElement>;
    } & import("react").RefAttributes<HTMLTableRowElement>>;
    Pagination: import("react").FC<import("./components").PaginationProps>;
};
export { TableComponent, TBody, THead, THeadCell, TSortableHeadCell, TCell, TRow, TExpandableRow, Pagination, };
