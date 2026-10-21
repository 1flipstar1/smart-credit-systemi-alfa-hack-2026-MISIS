import { type RefObject } from 'react';
import { type TextAlignProperty } from '../../typings';
export type ColumnConfiguration = {
    width?: string | number;
    textAlign?: TextAlignProperty;
    hidden?: boolean;
    index: number;
};
export type TableContextType = {
    columnsConfiguration: ColumnConfiguration[];
    stickyHeader: boolean;
    compactView: boolean;
    compactHorizontal: boolean;
    wrapperRef: RefObject<HTMLDivElement>;
};
export declare const DEFAULT_TABLE_CONTEXT: TableContextType;
export declare const TableContext: import("react").Context<TableContextType>;
