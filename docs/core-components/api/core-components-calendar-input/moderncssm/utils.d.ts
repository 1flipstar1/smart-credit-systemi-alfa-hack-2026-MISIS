export declare const DATE_FORMAT = "dd.MM.yyyy";
export declare const NATIVE_DATE_FORMAT = "yyyy-MM-dd";
export declare const DATE_MASK: (string | RegExp)[];
export declare const IS_BROWSER: boolean;
export declare const SUPPORTS_INPUT_TYPE_DATE: boolean;
export declare const formatDate: (date: Date | number, dateFormat?: string) => string;
export declare const parseDateString: (value: string, dateFormat?: string) => Date;
/**
 * Возвращает `true`, если поддерживается `input[type="date"]`
 */
export declare function isInputDateSupported(): boolean;
export declare const isValidInputValue: (newInputValue: string | undefined, minDate: number | undefined, maxDate: number | undefined, offDays?: Array<number | Date>) => boolean;
