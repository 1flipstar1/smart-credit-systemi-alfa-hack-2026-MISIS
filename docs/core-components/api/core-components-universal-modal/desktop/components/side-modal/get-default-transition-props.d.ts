import { type UniversalModalDesktopProps } from '../../types/props';
interface Params {
    horizontalAlign: UniversalModalDesktopProps['horizontalAlign'];
    margin: UniversalModalDesktopProps['margin'];
}
export declare const getDefaultTransitionProps: (params: Params) => {
    timeout: number;
    classNames: {
        appear: string;
        enter: string;
        appearActive: string;
        enterActive: string;
        appearDone: string;
        enterDone: string;
        exit: string;
        exitActive: string;
        exitDone: string;
    };
};
export {};
