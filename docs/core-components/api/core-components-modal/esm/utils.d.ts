import { type ModalResponsiveProps } from './typings';
export declare function getModalTestIds(dataTestId: string): {
    modal: string;
    content: string;
    footer: string;
    controls: string;
    header: string;
    title: string;
    closer: string;
    backButton: string;
};
export declare const getSizeStyle: (size: ModalResponsiveProps["size"]) => string;
