import { type FC, type ReactEventHandler } from 'react';
export declare const ASPECT_RATIO = 0.63;
export declare const DEFAULT_WIDTH = 280;
export declare const DEFAULT_BASE_URL: string;
export type CardImageProps = {
    /**
     * Идентификатор карты
     * (например: ER, GQ, SU)
     */
    cardId?: string;
    /**
     * Какие слои показывать, через запятую без пробелов
     * (полный набор: BACKGROUND,CARD_NUMBER,CARD_HOLDER,
     * PAY_PASS,CHIP,LOGO,PAYMENT_SYSTEM,RESERVED_1,RESERVED_2,VALID_DATE)
     */
    layers?: string;
    /**
     * Ширина изображения
     */
    width?: number;
    /**
     * Скругление углов
     */
    rounded?: boolean;
    /**
     * Базовый URL сервиса с изображениями
     */
    baseUrl?: string;
    /**
     * Колбек, вызываемый при загрузке изображения
     */
    onLoad?: () => void;
    /**
     * Колбек, вызываемый при ошибке загрузки изображения
     */
    onError?: ReactEventHandler<HTMLImageElement>;
    /**
     * Дополнительный класс
     */
    className?: string;
    /**
     * Текстовое описание изображения
     */
    alt?: string;
    /**
     * Уникальный идентификатор блока
     */
    id?: string;
    /**
     * Идентификатор для систем автоматизированного тестирования
     */
    dataTestId?: string;
};
export declare const CardImage: FC<CardImageProps>;
