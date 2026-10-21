export declare const DATE_FORMAT = "dd.MM.yyyy";
export declare const DATE_MASK: (string | RegExp)[];
export declare const isCompleteDateInput: (input: string) => boolean;
export declare const parseDateString: (value: string, dateFormat?: string) => Date;
export declare const isValid: (inputValue: string, dateFrom: string, dateTo: string) => boolean;
export declare const format: (value: string) => string;
export declare const parseTimestampToDate: (timestamp: number) => string;
