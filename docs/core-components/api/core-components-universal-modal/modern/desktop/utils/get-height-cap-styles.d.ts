import { type UniversalModalDesktopProps } from '../types/props';
interface Params {
    styles: Record<string, string>;
    margin: UniversalModalDesktopProps['margin'];
}
export declare const getHeightCapStyles: (params: Params) => string[];
export {};
