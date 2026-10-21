import { type FC } from 'react';
type CountdownSectionProps = {
    codeSendHintVisible: boolean;
    timePassed: boolean;
    processing: boolean;
    mobile?: boolean;
    handleSmsRetryClick: () => void;
};
export declare const CountdownSection: FC<CountdownSectionProps>;
export {};
