import { type FC } from 'react';
import { type SingleCommonProps } from '../../typings';
export type ImageCardProps = Pick<SingleCommonProps, 'imageProps'> & {
    /**
     * Идентификатор карты
     * (например: RM, SQ, SR)
     */
    cardId?: string;
    /**
     * Базовый URL сервиса с изображениями
     */
    baseUrl?: string;
    /**
     * Какие слои показывать, через запятую без пробелов
     * (полный набор: BACKGROUND,CARD_NUMBER,CARD_HOLDER,PAY_PASS,CHIP,LOGO,PAYMENT_SYSTEM,RESERVED_1,RESERVED_2,VALID_DATE)
     */
    layers?: string;
    /**
     * Ширина карты
     */
    width?: number;
    /**
     * Высота карты
     */
    height?: number;
    /**
     * (Устаревший) Количество карт
     * @deprecated Используйте 'numberOfCards'
     */
    numberOfСards?: number;
    /**
     * Количество карт
     */
    numberOfCards?: number;
};
export declare const ImageCard: FC<ImageCardProps>;
