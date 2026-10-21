import React from 'react';
export declare const Underlay: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLDivElement> & {
    dimensions?: {
        width?: number | string;
        height?: number | string;
    };
    padding?: {
        top?: import("./types").UnderlayPaddingSize;
        right?: import("./types").UnderlayPaddingSize;
        bottom?: import("./types").UnderlayPaddingSize;
        left?: import("./types").UnderlayPaddingSize;
    } | number;
    borderRadius?: import("./types").UnderlayBorderRadius | import("./types").CornersRadiusType;
    backgroundColor?: string;
    borderSize?: import("./types").BorderSizeType;
    borderColor?: import("@alfalab/core-components-types").BorderColorType;
    overflow?: boolean;
    shadow?: import("@alfalab/core-components-types").ShadowType;
    className?: string;
    dataTestId?: string;
    contentProps?: import("./types").ContentPropsType;
    children?: React.ReactNode;
} & React.RefAttributes<HTMLDivElement>>;
