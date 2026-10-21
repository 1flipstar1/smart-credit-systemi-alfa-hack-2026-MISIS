import { type TransitionProps } from 'react-transition-group/Transition';
import { type BackdropProps } from '@alfalab/core-components-backdrop/moderncssm';
import { type UniversalModalDesktopProps } from '../types/props';
interface Params {
    verticalAlign: Exclude<UniversalModalDesktopProps['verticalAlign'], undefined>;
    width: UniversalModalDesktopProps['width'];
    height: UniversalModalDesktopProps['height'];
}
interface ReturnType {
    isFullSizeModal: boolean;
    backdropTransitions: Partial<BackdropProps>;
    componentTransitions: Partial<TransitionProps>;
}
export declare const getFullSizeModalTransitions: (params: Params) => ReturnType;
export {};
