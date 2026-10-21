import React from 'react';
import { type CalendarMobileProps } from './components/calendar-mobile';
import { type CalendarDesktopProps } from './desktop';
export type ResponsiveCalendarProps = CalendarDesktopProps & CalendarMobileProps & {
    /**
     * Контрольная точка, с нее начинается desktop версия
     * @default 1024
     */
    breakpoint?: number;
    /**
     * Версия, которая будет использоваться при серверном рендеринге
     */
    client?: 'desktop' | 'mobile';
    /**
     * Значение по-умолчанию для хука useMatchMedia
     * @deprecated Используйте client
     */
    defaultMatchMediaValue?: boolean | (() => boolean);
};
export declare const CalendarResponsive: React.ForwardRefExoticComponent<CalendarDesktopProps & {
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
} & Omit<CalendarDesktopProps, ("className" | "defaultView" | "selectorView" | "rangeComplete" | "onMonthChange" | "onYearClick" | "onPeriodClick" | "dataTestId" | "hasHeader" | "responsive" | "showCurrentYearSelector") | ("headerClassName" | "contentClassName")> & Pick<CalendarDesktopProps, "className" | "defaultView" | "selectorView" | "rangeComplete" | "onMonthChange" | "onYearClick" | "onPeriodClick" | "dataTestId" | "hasHeader" | "responsive" | "showCurrentYearSelector"> & Pick<import("@alfalab/core-components-modal/shared").ModalHeaderProps, "hasBackButton" | "onBack"> & {
    /**
     * Контрольная точка, с нее начинается desktop версия
     * @default 1024
     */
    breakpoint?: number;
    /**
     * Версия, которая будет использоваться при серверном рендеринге
     */
    client?: "desktop" | "mobile";
    /**
     * Значение по-умолчанию для хука useMatchMedia
     * @deprecated Используйте client
     */
    defaultMatchMediaValue?: boolean | (() => boolean);
} & React.RefAttributes<HTMLDivElement>>;
