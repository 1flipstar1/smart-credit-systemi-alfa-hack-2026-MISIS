/**
 * Возвращает MediaQueryList для заданного media-выражения.
 *
 * @param queryProp media выражение или кастомный запрос из `mq.json`, например `--mobile`.
 */
export declare function getMatchMedia(queryProp: string): MediaQueryList;
/**
 * Удаляет MediaQueryList.
 *
 * @param queryProp media выражение или кастомный запрос из `mq.json`, например `--mobile`.
 */
export declare function releaseMatchMedia(queryProp: string): void;
/**
 * Возвращает `true`, если есть поддержка `Pointer Events`
 */
export declare function isPointerEventsSupported(): boolean;
/**
 * Возвращает `true`, если есть поддержка `Touch Events`
 */
export declare function isTouchSupported(): boolean;
