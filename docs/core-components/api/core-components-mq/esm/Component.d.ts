import { type FC, type ReactNode } from 'react';
export type MqProps = {
    /**
     * Media выражение или кастомный запрос из `mq.json`, например `--mobile`.
     */
    query?: string;
    /**
     * Запрос на поддержку тач-событий
     */
    touch?: boolean;
    /**
     * Значение по-умолчанию для хука useMatchMedia
     */
    defaultMatchMediaValue?: boolean | (() => boolean);
    /**
     * Дочерние элементы.
     */
    children?: ReactNode;
    /**
     * Обработчик изменений в совпадении запросов
     */
    onMatchChange?: (isMatched: boolean) => void;
};
export declare const Mq: FC<MqProps>;
