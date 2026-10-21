/**
 * Возвращает true, если значение равно null или undefined
 */
export declare function isNullable<T>(value: T): value is T & (null | undefined);
export declare function isNonNullable<T>(value: T): value is NonNullable<T>;
/**
 * Выбор значения между min max границами
 */
declare function clamp<T extends Date | number>(value: T, min: T, max: T): T;
export declare function noop(): void;
export declare const fnUtils: {
    clamp: typeof clamp;
    noop: typeof noop;
    isNil: typeof isNullable;
};
export {};
