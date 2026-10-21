import React from 'react';
import { type PaddingType } from '@alfalab/core-components-types/cssm';
type CaptionProps = {
    /**
     * Дополнительно имя класса
     */
    className?: string;
    /**
     * Дочерние элементы
     */
    children: React.ReactNode;
    /**
     * Отступы
     */
    padding?: PaddingType;
};
export declare const Caption: React.FC<CaptionProps>;
export {};
