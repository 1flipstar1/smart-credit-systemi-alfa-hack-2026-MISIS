import React, { type ReactNode } from 'react';
import { type BaseShapeProps, type TMainSize } from '../base-shape';
export type NoShapeProps = Omit<BaseShapeProps, 'pathsMap' | 'size' | 'topAddons' | 'bottomAddons' | 'indicator' | 'border'> & {
    /**
     * Размер компонента
     * @default 64
     */
    size?: TMainSize;
    /**
     * Дочерний компонент
     */
    children?: ReactNode;
};
export declare const NoShape: React.ForwardRefExoticComponent<Omit<BaseShapeProps, "indicator" | "size" | "border" | "topAddons" | "bottomAddons" | "pathsMap"> & {
    /**
     * Размер компонента
     * @default 64
     */
    size?: TMainSize;
    /**
     * Дочерний компонент
     */
    children?: ReactNode;
} & React.RefAttributes<HTMLDivElement>>;
