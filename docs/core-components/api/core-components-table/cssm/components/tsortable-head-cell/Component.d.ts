import React from 'react';
import { type THeadCellProps } from '../thead-cell';
export type TSortableHeadCellProps = THeadCellProps & {
    isSortedDesc?: boolean;
    defaultIsSortedDesc?: boolean;
    onSort?: () => void;
};
export declare const TSortableHeadCell: ({ children, className, defaultIsSortedDesc, isSortedDesc, textAlign, onSort, ...restProps }: TSortableHeadCellProps) => React.JSX.Element;
