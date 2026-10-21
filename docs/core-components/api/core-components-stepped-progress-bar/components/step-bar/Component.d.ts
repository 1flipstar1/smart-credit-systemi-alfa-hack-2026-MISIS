import { type FC } from 'react';
import { type SteppedProgressBarViewValue } from '../../Component';
interface StepBarProps {
    isDone: boolean;
    view?: SteppedProgressBarViewValue;
    classNameStep?: string;
}
export declare const StepBar: FC<StepBarProps>;
export {};
