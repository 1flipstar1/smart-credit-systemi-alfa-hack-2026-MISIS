export declare const DATE_FORMAT = "dd.MM.yyyy";
export declare const NATIVE_DATE_FORMAT = "yyyy-MM-dd";
export declare const DATE_MASK: (string | RegExp)[];
export declare const isCompleteDateInput: (input: string) => boolean;
export declare const formatDate: (date: Date | number, dateFormat?: string) => string;
export declare const parseDateString: (value: string, dateFormat?: string) => Date;
export declare const isValid: (inputValue?: string) => boolean;
export declare const format: (value: string) => string;
