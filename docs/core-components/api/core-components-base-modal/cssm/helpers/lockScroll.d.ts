/**
 * Хелпер для блокирования скроллинга в iOS
 * В проекте используется overflow: hidden для блокировки, но в некоторых случаях этого недостаточно. Данный хелпер призван решать эту проблему
 */
export declare const isScrollLocked: () => boolean;
export declare const lockScroll: () => void;
export declare const unlockScroll: () => void;
export declare const syncHeight: () => void;
