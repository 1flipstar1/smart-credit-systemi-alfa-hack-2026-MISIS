import React, { type ReactNode } from 'react';
import { type Color } from '@alfalab/core-components-typography/esm';
export type FooterTextProps = {
    /**
     * Цвет текста
     */
    color?: Color;
    /**
     * Идентификатор для систем автоматизированного тестирования.
     * Используется модификатор -footer-title
     */
    dataTestId?: string;
    /**
     * Дочерние элементы.
     */
    children?: ReactNode;
};
export declare const FooterText: React.FC<FooterTextProps>;
