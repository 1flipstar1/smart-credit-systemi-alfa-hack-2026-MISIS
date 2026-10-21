import React from 'react';
import { type PaddingType } from '@alfalab/core-components-types';
type GraphicProps = {
    /**
     * Дополнительный класс
     */
    className?: string;
    /**
     * Элемент с иконкой
     */
    children: React.ReactNode;
    /**
     * Отступы
     */
    padding?: PaddingType;
};
export declare const Graphic: React.FC<GraphicProps>;
export {};
