/**
 * Парсит индекс из data-атрибута
 */
export declare const parseInputIdx: (el: HTMLElement | null) => number | null;
/**
 * Синхронизирует выделение текста в инпуте после фокуса/клика.
 * В Safari корректное выделение работает только при асинхронном вызове
 */
export declare const syncSelection: (target: HTMLInputElement) => void;
