import React, { type ReactNode } from 'react';
import { type BaseShapeProps, type TMainSize } from '../base-shape';
export type SuperEllipseProps = Omit<BaseShapeProps, 'pathsMap' | 'size'> & {
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
export declare const SuperEllipse: React.ForwardRefExoticComponent<Omit<BaseShapeProps, "size" | "pathsMap"> & {
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
export type SuperEllipseBlankProps = SuperEllipseProps & {
    /**
     * Фигуры
     */
    pathsMap: BaseShapeProps['pathsMap'];
};
export declare const SuperEllipseBlank: React.ForwardRefExoticComponent<Omit<BaseShapeProps, "size" | "pathsMap"> & {
    /**
     * Размер компонента
     * @default 64
     */
    size?: TMainSize;
    /**
     * Дочерний компонент
     */
    children?: ReactNode;
} & {
    /**
     * Фигуры
     */
    pathsMap: BaseShapeProps["pathsMap"];
} & React.RefAttributes<HTMLDivElement>>;
