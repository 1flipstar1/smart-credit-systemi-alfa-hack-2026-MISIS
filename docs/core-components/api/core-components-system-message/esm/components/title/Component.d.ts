import React from 'react';
import { type PaddingType } from '@alfalab/core-components-types/esm';
type TitleProps = {
    /**
     * Дополнительно имя класса
     */
    className?: string;
    /**
     * HTML тег
     * @default h3
     */
    tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'div';
    /**
     * Заголовок
     */
    children: React.ReactNode;
    /**
     * Отступы
     */
    padding?: PaddingType;
};
export declare const Title: React.FC<TitleProps>;
export {};
