type OtpSubscriber = (code: string) => void;
/**
 * Подписывает компонент на результат единого Web OTP-запроса.
 * Полученный код будет передан всем живым подписчикам.
 * При отписке общий запрос не абортим — просто игнорируем дальнейшие вызовы.
 */
export declare function subscribeWebOtp(onCode: OtpSubscriber): () => void;
export {};
