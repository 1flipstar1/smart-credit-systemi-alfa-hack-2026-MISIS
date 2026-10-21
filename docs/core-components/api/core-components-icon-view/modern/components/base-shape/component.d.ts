import React, { type ElementType, type ReactNode } from 'react';
import { type PathsMap } from './utils';
type Border = {
    width?: number;
    color?: string;
    style?: 'solid' | 'dashed';
};
export type ScaleType = 'fit' | 'fill';
export type TMainSize = 16 | 20 | 24 | 32 | 40 | 48 | 56 | 64 | 72 | 80 | 128;
export type BaseShapeProps = {
    /**
     * Размер компонента
     * @default 64
     */
    size?: TMainSize | number | {
        width: TMainSize | number;
        height: TMainSize | number;
    };
    /**
     * Цвет заливки
     * @default #f3f4f5
     */
    backgroundColor?: string;
    /**
     * Дополнительный класс для стилизации формы шейпа.
     */
    shapeClassName?: string;
    /**
     * Видимость обводки
     * @default false
     */
    border?: boolean | Border;
    /**
     * Фоновое изображение. Имеет приоритет над иконкой и заливкой
     */
    imageUrl?: string;
    /**
     * Режим масштабирования изображения
     * 'fill' - изображение заполняет всё доступное пространство и может быть обрезано
     * 'fit' - изображение вписывается полностью без обрезки
     * @default 'fill'
     */
    scale?: ScaleType;
    /**
     * Фоновое svg. Имеет приоритет над иконкой и заливкой
     */
    backgroundIcon?: ElementType;
    /**
     * Сss класс для стилизации общей обёртки
     */
    className?: string;
    /**
     * Сss класс для стилизации обертки иконки
     */
    iconContainerClassName?: string;
    /**
     * Слот сверху
     */
    topAddons?: ReactNode;
    /**
     * Слот снизу
     */
    bottomAddons?: ReactNode;
    /**
     * Слот индикатора сверху
     */
    indicator?: ReactNode;
    /**
     * Фигуры
     */
    pathsMap: PathsMap;
    /**
     * Идентификатор для систем автоматизированного тестирования
     */
    dataTestId?: string;
    /**
     * Дочерние элементы.
     */
    children?: ReactNode;
    /**
     * Текст
     */
    text?: ReactNode;
    /**
     * Размер основного слота
     */
    mainSize?: TMainSize;
};
export declare const BaseShape: React.ForwardRefExoticComponent<BaseShapeProps & React.RefAttributes<HTMLDivElement>>;
export {};
