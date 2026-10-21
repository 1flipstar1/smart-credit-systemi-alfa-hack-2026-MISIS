import React, { type ReactNode, type Ref } from 'react';
import { type TRowProps } from '../trow';
export type TExpandableRowProps = TRowProps & {
    defaultExpanded?: boolean;
    expanded?: boolean;
    onToggle?: (expanded: boolean) => void;
    renderContent: (expanded: boolean) => ReactNode;
    rowRef?: Ref<HTMLTableRowElement>;
};
export declare const TExpandableRow: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLTableRowElement> & {
    children: React.ReactElement<import("..").TCellProps, ({ className, style, dataTestId, children, index, ...restProps }: import("..").TCellProps) => React.JSX.Element | null> | React.ReactElement<import("..").TCellProps, ({ className, style, dataTestId, children, index, ...restProps }: import("..").TCellProps) => React.JSX.Element | null>[];
    className?: string;
    selected?: boolean;
    withoutBorder?: boolean;
    dataTestId?: string;
} & {
    defaultExpanded?: boolean;
    expanded?: boolean;
    onToggle?: (expanded: boolean) => void;
    renderContent: (expanded: boolean) => ReactNode;
    rowRef?: Ref<HTMLTableRowElement>;
} & React.RefAttributes<HTMLTableRowElement>>;
