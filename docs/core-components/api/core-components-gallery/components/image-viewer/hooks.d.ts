import { type MouseEventHandler, type SyntheticEvent } from 'react';
export declare const useHandleImageViewer: () => {
    handleLoad: (event: SyntheticEvent<HTMLImageElement>, index: number) => void;
    handleLoadError: (index: number) => void;
    handleWrapperClick: MouseEventHandler;
    isMobile: boolean;
    leftArrowRef: import("react").RefObject<HTMLDivElement>;
    rightArrowRef: import("react").RefObject<HTMLDivElement>;
};
