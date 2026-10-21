/**
 * Позволяет проверить что цифры были вставлены до или после знака плюс [+]
 * @description +7 123 => paste 222 => +2227 123
 * @description +7 123 => paste 222 => 222+7 123
 */
export declare const checkInsertBefore: (baseNumber: string | undefined, modifiedNumber: string) => boolean;
