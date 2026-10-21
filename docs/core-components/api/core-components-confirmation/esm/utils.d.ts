import { type ConfirmationProps } from './types';
/**
 * Форматирование миллисекунд в hh:mm:ss.
 *
 * @param {Number} ms миллисекунды
 * @returns {String} время в формате mm:ss
 */
export declare function formatMsAsMinutes(ms: number): string;
type UseCountdown = (countdownDuration: number, tick?: number) => [number, () => void, () => void];
/**
 * Возвращает время, которое осталось до истечения таймера в ms
 */
export declare const useCountdown: UseCountdown;
export declare const ONE_DAY: number;
export declare const ONE_MINUTE: number;
type UseConfirmationParams = {
    state?: ConfirmationProps['state'];
    screen?: ConfirmationProps['screen'];
    blockSmsRetry?: ConfirmationProps['blockSmsRetry'];
};
export declare const useConfirmation: ({ state, screen, blockSmsRetry }?: UseConfirmationParams) => {
    confirmationState: string;
    confirmationScreen: string;
    confirmationBlockSmsRetry: boolean;
    setConfirmationState: import("react").Dispatch<import("react").SetStateAction<string>>;
    setConfirmationScreen: import("react").Dispatch<import("react").SetStateAction<string>>;
    setConfirmationBlockSmsRetry: import("react").Dispatch<import("react").SetStateAction<boolean>>;
};
/**
 * @returns ссылку для набора номера
 */
export declare function getPhoneHref(phone: string): string;
export {};
