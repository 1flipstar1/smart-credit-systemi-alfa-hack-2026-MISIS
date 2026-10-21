export declare const TIMEOUT = 500;
export declare const SWIPE_VELOCITY = 0.4;
export declare const MARKER_HEIGHT = 24;
export declare const CLOSE_OFFSET = 0.2;
export declare const SCROLL_OFFSET = 1;
export declare const HEADER_OFFSET = 24;
export declare const convertPercentToNumber: (value: string | number, fullHeight: number, headerOffset?: number) => number;
export declare function getBottomSheetTestIds(dataTestId: string): {
    bottomSheet: string;
    content: string;
    footer: string;
    header: string;
    title: string;
    closer: string;
    backButton: string;
};
