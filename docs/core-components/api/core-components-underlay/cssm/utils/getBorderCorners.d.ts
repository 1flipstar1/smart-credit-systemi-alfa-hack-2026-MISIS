import { type CornersRadiusType, type UnderlayBorderRadius } from '../types';
export declare const getBorderCorners: (borderRadius: UnderlayBorderRadius | CornersRadiusType | undefined) => {
    [x: string]: UnderlayBorderRadius | undefined;
} | undefined;
