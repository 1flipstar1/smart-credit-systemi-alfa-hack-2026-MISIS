import { type RadiusProp } from '../../types/seria.types';
export type usePathBarProps = {
    radius?: RadiusProp;
    height: number;
    background?: {
        x: number;
        y: number;
        height: number;
        width: number;
    };
    y?: number;
};
export declare const usePathBar: (props: usePathBarProps) => number[];
