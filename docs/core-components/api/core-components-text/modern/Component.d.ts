import { type FC, type ReactNode } from 'react';
import { type TypographyType } from '@alfalab/core-components-types/modern';
export interface TextProps {
    /**
     * HTML тег
     */
    tag?: 'span' | 'p' | 'div' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
    /**
     * Cтиль типографики
     */
    view?: TypographyType;
    /**
     * Выравнивание текста
     * @default left
     */
    align?: 'left' | 'center' | 'right';
    /**
     * Цвет текста
     */
    color?: string;
    /**
     * Цвет фона
     */
    textBackgroundColor?: string;
    /**
     * Количество строк
     */
    rowLimit?: 1 | 2 | 3;
    /**
     * Делает цифры моноширинными
     */
    monospaceNumbers?: boolean;
    /**
     * Дополнительный класс
     */
    className?: string;
    /**
     * Дочерние элементы
     */
    children?: ReactNode;
    /**
     * Идентификатор для систем автоматизированного тестирования.
     */
    dataTestId?: string;
}
export declare const Text: FC<TextProps>;
