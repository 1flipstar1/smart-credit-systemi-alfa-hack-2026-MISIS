import React, { type AriaAttributes, type HTMLAttributes, type ReactNode } from 'react';
import { type Align, type Direction, type Size } from './utils';
export interface SpaceProps extends Omit<HTMLAttributes<HTMLDivElement>, 'className' | 'children'>, AriaAttributes {
    /**
     * Выравнивание
     */
    align?: Align;
    /**
     * Направление
     */
    direction?: Direction;
    /**
     * Размер отступов
     */
    size?: Size | [Size, Size];
    /**
     * Дополнительный класс
     */
    className?: string;
    /**
     * Дочерние компоненты
     */
    children: ReactNode;
    /**
     * Идентификатор для систем автоматизированного тестирования
     */
    dataTestId?: string;
    /**
     * Автоматический перенос строк, полезно при direction = 'horizontal'
     */
    wrap?: boolean;
    /**
     * Компонент разделителя
     */
    divider?: string | ReactNode;
    /**
     * Растягивать ли компонент на всю ширину
     */
    fullWidth?: boolean;
    /**
     * Использовать css gap
     * @description Поддержка ограничена. см https://caniuse.com/?search=gap
     */
    useCssGaps?: boolean;
}
/**
 * Позаимствовано с благодарностью из Ant Design
 */
export declare const Space: React.ForwardRefExoticComponent<SpaceProps & React.RefAttributes<HTMLDivElement>>;
