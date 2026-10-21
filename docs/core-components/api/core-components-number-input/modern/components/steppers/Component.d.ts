import { type FC } from 'react';
import { type InputProps } from '@alfalab/core-components-input/modern';
export type SteppersProps = {
    value: number;
    min: number;
    max: number;
    className?: string;
    disabled?: boolean;
    focused?: boolean;
    onIncrement: () => void;
    onDecrement: () => void;
    dataTestId?: string;
    colors: 'default' | 'inverted';
    size: InputProps['size'];
};
export declare const Steppers: FC<SteppersProps>;
