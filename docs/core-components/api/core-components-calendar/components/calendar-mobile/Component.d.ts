import React from 'react';
export declare const CalendarMonthOnlyViewHeader: () => React.JSX.Element;
export declare const CalendarMobile: React.ForwardRefExoticComponent<{
    title?: string;
    open: boolean;
    onClose?: () => void;
    allowSelectionFromEmptyRange?: boolean;
    hasHeader?: boolean;
    onApply?: () => void;
    clickableMonth?: boolean;
    cancelButtonContent?: string;
    selectButtonContent?: string;
    resetButtonContent?: string;
} & {
    onMonthTitleClick?: (event: React.MouseEvent<HTMLSpanElement>) => void;
    yearsAmount?: number;
    scrollableContainer?: HTMLElement;
} & Omit<import("../../desktop").CalendarDesktopProps, ("className" | "defaultView" | "selectorView" | "rangeComplete" | "onMonthChange" | "onYearClick" | "onPeriodClick" | "dataTestId" | "hasHeader" | "responsive" | "showCurrentYearSelector") | ("headerClassName" | "contentClassName")> & Pick<import("../../desktop").CalendarDesktopProps, "className" | "defaultView" | "selectorView" | "rangeComplete" | "onMonthChange" | "onYearClick" | "onPeriodClick" | "dataTestId" | "hasHeader" | "responsive" | "showCurrentYearSelector"> & Pick<import("@alfalab/core-components-modal/shared").ModalHeaderProps, "hasBackButton" | "onBack"> & React.RefAttributes<HTMLDivElement>>;
