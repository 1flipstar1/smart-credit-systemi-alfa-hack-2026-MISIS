import { type FC } from 'react';
interface ProgressBarProps {
    className: string;
    strokeDasharray: number;
    strokeDashoffset: number;
    strokeWidth?: number;
    stroke?: string;
    size?: number;
    isIndeterminate?: boolean;
}
export declare const ProgressBar: FC<ProgressBarProps>;
export {};
