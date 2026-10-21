import { type FC, type MouseEvent } from 'react';
export type OverlimitProps = {
    duration?: number;
    buttonRetryText: string;
    hasFatalError: boolean;
    title: string;
    text: string;
    onOverlimitCountdownFinished: () => void;
    onOverlimitRepeatSms: (event: MouseEvent) => void;
};
export declare const Overlimit: FC<OverlimitProps>;
