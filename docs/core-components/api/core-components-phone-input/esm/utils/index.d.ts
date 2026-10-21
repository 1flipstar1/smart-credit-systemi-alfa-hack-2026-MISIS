/**
 * Удаляет форматирование номера телефона
 * @param phone Номер телефона
 */
export declare const deleteFormatting: (phone: string) => string;
export declare function setCaretPosition({ position, inputRef, }: {
    position: number;
    inputRef: React.RefObject<HTMLInputElement>;
}): void;
export declare function getInsertedNumber({ rawValue, clearableCountryCode, countryPrefix, previousConformedValue, }: {
    rawValue: string;
    clearableCountryCode: boolean;
    countryPrefix: string;
    previousConformedValue: string;
}): string;
export declare function deleteMaskChar(previousValue: string, rawValue: string): string;
