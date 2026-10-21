import React from 'react';
import { type PaddingType } from '@alfalab/core-components-types/moderncssm';
type SubtitleProps = {
    /**
     * Дополнительно имя класса
     */
    className?: string;
    /**
     * Заголовок
     */
    children: React.ReactNode;
    /**
     * Отступы
     */
    padding?: PaddingType;
};
export declare const Subtitle: React.FC<SubtitleProps>;
export {};
