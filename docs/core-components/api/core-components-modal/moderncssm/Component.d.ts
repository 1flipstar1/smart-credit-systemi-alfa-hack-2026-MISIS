import React from 'react';
import { type View } from './typings';
export declare const Modal: React.ForwardRefExoticComponent<import("@alfalab/core-components-base-modal").BaseModalProps & {
    size?: "fullscreen" | 500 | 600 | 800 | 1140;
    fixedPosition?: boolean;
    hasCloser?: boolean;
    iOSLock?: boolean;
} & {
    view: View;
} & React.RefAttributes<HTMLDivElement>>;
