import { type PeriodType } from '.';
export declare const formatPeriod: (valueFrom: Date, valueTo: Date, periodType: PeriodType, showCurrentYear?: boolean) => string;
export declare const getYearSelectorValue: (valueFrom: Date | undefined, showCurrentYear: boolean) => number | "";
export declare const shiftValues: (valueFrom: Date, valueTo: Date, periodType: PeriodType, direction: "prev" | "next") => {
    valueFrom: Date;
    valueTo: Date;
};
