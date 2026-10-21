import { type RefObject } from 'react';
export declare function usePopoverViewMonthes({ dateFrom, dateTo, defaultMonth, resetKey, }: {
    defaultMonth: number;
    dateFrom: number | null;
    dateTo: number | null;
    resetKey?: number;
}): {
    monthFrom: number | undefined;
    monthTo: number | undefined;
    handleMonthFromChange: (newMonthFrom: number) => void;
    handleMonthToChange: (newMonthTo: number) => void;
};
export declare function useStaticViewMonthes({ selectedFrom, selectedTo, defaultMonth, defaultMonthPosition, }: {
    selectedFrom?: number;
    selectedTo?: number;
    defaultMonth: number;
    defaultMonthPosition?: 'left' | 'right';
}): {
    monthFrom: number;
    monthTo: number;
    handleMonthFromChange: (newMonthFrom: number) => void;
    handleMonthToChange: (newMonthTo: number) => void;
};
export declare function useSelectionProps(from?: number, to?: number, highlighted?: number): {
    rangeComplete: boolean;
    selectedFrom: number | undefined;
    selectedTo: number | undefined;
};
interface UseStaticRangeAutoSwapParams {
    autoSwap: boolean;
    setInputFromValue: React.Dispatch<React.SetStateAction<string>>;
    setInputToValue: React.Dispatch<React.SetStateAction<string>>;
    toggleCorrectionFromRef: RefObject<CorrectionToggleRef>;
    toggleCorrectionToRef: RefObject<CorrectionToggleRef>;
    inputFromRef: RefObject<HTMLInputElement>;
    inputToRef: RefObject<HTMLInputElement>;
}
type CorrectionToggleRef = {
    handleCorrection: () => void;
};
export declare const useStaticRangeAutoSwap: ({ autoSwap, setInputFromValue, setInputToValue, toggleCorrectionFromRef, toggleCorrectionToRef, inputFromRef, inputToRef, }: UseStaticRangeAutoSwapParams) => {
    swapDates: (newValue: string, inputFromValue: string, inputToValue: string) => void;
    isInternalUpdate: import("react").MutableRefObject<boolean>;
};
interface UseInputValidationParams {
    inputFromValue: string;
    inputToValue: string;
    minDate: number;
    maxDate: number;
    offDays: Array<number | Date>;
}
interface InputValidationResult {
    inputFromError: boolean;
    inputToError: boolean;
    rangeError: boolean;
}
export declare const useInputValidation: ({ inputFromValue, inputToValue, minDate, maxDate, offDays, }: UseInputValidationParams) => InputValidationResult;
export {};
