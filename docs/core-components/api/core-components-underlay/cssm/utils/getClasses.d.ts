import { type BorderColorType, type ShadowType } from '@alfalab/core-components-types/cssm';
import { type BorderSizeType } from '../types';
export declare const isBackgroundToken: (token: string | undefined) => boolean | "" | undefined;
export declare const getClasses: (backgroundColor: string | undefined, borderColor: BorderColorType | undefined, borderSize: BorderSizeType | undefined, shadow: ShadowType | undefined) => {
    [x: string]: boolean | "" | BorderSizeType | BorderColorType | ShadowType | undefined;
};
