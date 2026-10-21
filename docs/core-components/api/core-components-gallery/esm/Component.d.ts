import { type FC } from 'react';
import { type GalleryCustomButton, type GalleryImage } from './types';
export type GalleryProps = {
    /**
     * Управление видимостью
     */
    open: boolean;
    /**
     * Массив изображений
     */
    images: GalleryImage[];
    /**
     * Зациклить галерею
     * @default true
     */
    loop?: boolean;
    /**
     * Индекс открытого изображение
     * @default 0
     */
    initialSlide?: number;
    /**
     * Обработчик закрытия
     */
    onClose: () => void;
    /**
     * Индекс текущего изображения
     */
    slideIndex?: number;
    /**
     * Обработчик изменения текущего изображения
     */
    onSlideIndexChange?: (index: number) => void;
    /**
     * Дополнительный класс для попапа
     */
    popupClassName?: string;
    /**
     * Дополнительная кнопка в шапке галереи
     */
    customButton?: GalleryCustomButton;
};
export declare const Gallery: FC<GalleryProps>;
