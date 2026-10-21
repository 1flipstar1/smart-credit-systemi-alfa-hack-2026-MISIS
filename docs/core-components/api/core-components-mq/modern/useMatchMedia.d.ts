/**
 * Хук для медиа запросов.
 * @param query media выражение или кастомный запрос из `mq.json`, например `--mobile`.
 * @param defaultValue Значение по-умолчанию.
 */
export declare const useMatchMedia: (query: string, defaultValue?: boolean | (() => boolean)) => boolean[];
