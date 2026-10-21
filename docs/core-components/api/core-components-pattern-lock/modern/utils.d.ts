import { type Theme, type ThemeParams } from '@alfalab/react-canvas-pattern-lock';
export declare function getDefaultObserveTarget(): HTMLHeadElement;
export declare function getColorByToken(token: string): string;
export declare const getSizes: () => {
    elementSizes: ThemeParams["dimens"];
    width: number;
    height: number;
};
export declare function getTheme(dimens: ThemeParams['dimens']): Theme;
export declare function getPatternLockTestIds(dataTestId: string): {
    patternLock: string;
    forgotCodeBtn: string;
};
