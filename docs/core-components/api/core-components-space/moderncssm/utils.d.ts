import React from 'react';
export type Align = 'start' | 'end' | 'center';
export type Direction = 'horizontal' | 'vertical';
export type Size = 's' | 'm' | 'l' | number;
export declare const SpaceContext: React.Context<{
    length: number;
    horizontalSize: number;
    verticalSize: number;
}>;
