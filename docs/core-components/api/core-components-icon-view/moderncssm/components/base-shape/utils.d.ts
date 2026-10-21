import { type TMainSize } from './component';
export type TNames = 'top' | 'bottom' | 'topBottom' | 'none' | 'indicator' | 'indicatorBottom';
type SizePathsMap = {
    [size in TMainSize | number]: {
        top?: string;
        bottom?: string;
        topBottom?: string;
        none: string;
        indicator?: string;
        indicatorBottom?: string;
    };
};
type GetPathParams = {
    hasTopAddons: boolean;
    hasBottomAddons: boolean;
    hasIndicator: boolean;
};
export type PathsMap = {
    shape: SizePathsMap;
    border: SizePathsMap;
};
export declare const getPath: (name: TNames, size: TMainSize | number, pathsMap: SizePathsMap) => string;
export declare const getPathName: ({ hasTopAddons, hasBottomAddons, hasIndicator, }: GetPathParams) => TNames;
export {};
