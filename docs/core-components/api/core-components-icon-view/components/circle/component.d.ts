import React, { type ReactNode } from 'react';
import { type BaseShapeProps, type TMainSize } from '../base-shape';
export type CircleProps = Omit<BaseShapeProps, 'pathsMap' | 'size'> & {
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
export declare const Circle: React.ForwardRefExoticComponent<Omit<BaseShapeProps, "size" | "pathsMap"> & {
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
