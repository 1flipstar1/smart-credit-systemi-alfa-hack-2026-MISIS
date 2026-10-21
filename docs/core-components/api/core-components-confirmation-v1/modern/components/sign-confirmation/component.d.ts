import React, { type FC, type MutableRefObject, type ReactNode } from 'react';
import { type ContentAlign } from '../../component';
export type SignConfirmationProps = {
    codeChecking: boolean;
    codeSending: boolean;
    smsHintVisible: boolean;
    requiredCharAmount: number;
    countdownDuration: number;
    additionalContent: React.ReactNode;
    hasPhoneMask: boolean;
    phone?: string;
    code: string;
    errorText: string;
    error: boolean;
    title: string | React.ReactNode;
    codeCheckingText: string;
    codeSendingText: string;
    hasSmsCountdown: boolean;
    inputRef: MutableRefObject<HTMLInputElement | null>;
    alignContent: ContentAlign;
    noAttemptsLeftMessage?: string;
    buttonRetryText: string;
    countdownContent?: ReactNode;
    onInputFinished: ({ code }: {
        code: string;
    }) => void;
    onInputChange: ({ code }: {
        code: string;
    }) => void;
    onSmsRetryClick: (event: React.MouseEvent) => void;
    onCountdownFinished: () => void;
    onSmsHintLinkClick: (event: React.MouseEvent) => void;
};
export declare const SignConfirmation: FC<SignConfirmationProps>;
