export declare function isObject<T>(value: T): value is T & object;
type Intersect<T> = (T extends any ? (x: T) => any : never) extends (x: infer R) => any ? R : never;
type OptionalKeys<T> = {
    [K in keyof T]-?: {} extends Pick<T, K> ? K : never;
}[keyof T];
export declare function hasOwnProperty<T extends object, K extends OptionalKeys<T>>(val: T, prop: K): val is T & {
    [P in K]-?: T[P];
};
export declare function hasOwnProperty<T extends object, K extends keyof T>(val: T, prop: K): boolean;
export declare function hasOwnProperty<T extends object, K extends keyof Intersect<T>>(val: T, prop: K): val is Extract<T, K extends OptionalKeys<T> ? {
    [P in K]?: any;
} : {
    [P in K]: any;
}>;
export {};
