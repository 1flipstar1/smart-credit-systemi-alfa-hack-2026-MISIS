import React, { type ReactNode } from 'react';
import { type BaseShapeProps, type TMainSize } from '../base-shape';
type TSize = Exclude<TMainSize, 16>;
export type RectangleProps = Omit<BaseShapeProps, 'pathsMap' | 'size' | 'topAddons' | 'bottomAddons' | 'indicator'> & {
    /**
     * Размер компонента
     * @default 64
     */
    size?: TSize;
    /**
     * Дочерний компонент
     */
    children?: ReactNode;
};
export declare const Rectangle: React.ForwardRefExoticComponent<Omit<BaseShapeProps, "indicator" | "size" | "topAddons" | "bottomAddons" | "pathsMap"> & {
    /**
     * Размер компонента
     * @default 64
     */
    size?: TSize;
    /**
     * Дочерний компонент
     */
    children?: ReactNode;
} & React.RefAttributes<HTMLDivElement>>;
export {};
