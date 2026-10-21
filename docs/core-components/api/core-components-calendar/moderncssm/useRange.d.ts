import { type CalendarDesktopProps } from './desktop';
type UseRangeProps = Pick<CalendarDesktopProps, 'mode' | 'value' | 'rangeBehavior' | 'onChange' | 'selectedFrom' | 'selectedTo'>;
export declare function useRange({ mode, value, selectedFrom, selectedTo, rangeBehavior, onChange, }: UseRangeProps): {
    selectedFrom: number | undefined;
    selectedTo: number | undefined;
    onChange: ((date?: number, dateTo?: number) => void) | undefined;
    onReset: (() => void) | undefined;
    value: number | undefined;
};
export {};
