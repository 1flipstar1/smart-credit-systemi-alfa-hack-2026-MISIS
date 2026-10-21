import { type FC, type MouseEvent, type ReactNode } from 'react';
/**
 * TODO: Вынести это в utils
 * Форматирование миллисекунд в hh:mm:ss.
 *
 * @param {Number} ms миллисекунды
 * @returns {String} время в формате mm:ss
 */
export declare function formatMsAsMinutes(ms: number): string;
export type CountdownProps = {
    duration: number;
    hasPhoneMask: boolean;
    phone?: string;
    alignContent: string;
    buttonRetryText: string;
    noAttemptsLeftMessage?: string;
    hasError: boolean;
    content?: ReactNode;
    onCountdownFinished?: () => void;
    onRepeatSms: (event: MouseEvent) => void;
    children?: ReactNode;
};
export declare const Countdown: FC<CountdownProps>;
