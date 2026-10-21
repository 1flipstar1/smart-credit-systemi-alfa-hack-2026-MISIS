import * as React from 'react';
import { type Direction } from './utils';
export interface ItemProps {
    className: string;
    dividerClassName: string;
    horizontalSize: number;
    verticalSize: number;
    length: number;
    children: React.ReactNode;
    index: number;
    direction?: Direction;
    divider?: string | React.ReactNode;
    wrap?: boolean;
    useCssGaps: boolean;
}
declare const Item: (props: ItemProps) => React.JSX.Element | null;
export default Item;
