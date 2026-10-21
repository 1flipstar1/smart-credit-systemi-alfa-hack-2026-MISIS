import { type NavigationBarPrivateProps } from '@alfalab/core-components-navigation-bar-private/modern';
type Params = Pick<NavigationBarPrivateProps, 'title' | 'children' | 'bottomAddons' | 'onClose'>;
export declare const useBaseHeader: (params: Params) => {
    headerHighlighted: boolean | undefined;
    hasContent: boolean;
    componentRef: import("react").RefObject<HTMLDivElement>;
    titleRef: import("react").RefObject<HTMLDivElement>;
    handleClose: (event: import("react").MouseEvent<HTMLElement> | import("react").KeyboardEvent<HTMLElement>, reason?: "backdropClick" | "escapeKeyDown" | "closerClick") => void;
};
export {};
