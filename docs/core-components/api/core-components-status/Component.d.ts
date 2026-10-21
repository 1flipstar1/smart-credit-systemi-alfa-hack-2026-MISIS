import { type FC, type ReactNode } from 'react';
import { type COLORS, type SIZES } from './consts';
export type StatusProps = {
    /**
     * Дополнительный класс
     */
    className?: string;
    /**
     * Вид компонента
     * @default muted-alt
     * @description soft deprecated, используйте вместо него muted-alt
     */
    view?: 'contrast' | 'soft' | 'muted' | 'muted-alt';
    /**
     * Цветовое оформление компонента
     * @default green
     */
    color?: (typeof COLORS)[number];
    /**
     * Идентификатор для систем автоматизированного тестирования
     */
    dataTestId?: string;
    /**
     * Дочерние элементы.
     */
    children?: ReactNode;
    /**
     * Размер компонента
     * @default 20
     */
    size?: (typeof SIZES)[number];
    /**
     * Форма компонента
     * @default rectangular
     */
    shape?: 'rounded' | 'rectangular';
    /**
     * Текст компонента в верхнем регистре
     * @default true
     */
    uppercase?: boolean;
    /**
     * Слот слева
     */
    leftAddons?: ReactNode;
    /**
     * Слот справа
     */
    rightAddons?: ReactNode;
};
export declare const Status: FC<StatusProps>;
