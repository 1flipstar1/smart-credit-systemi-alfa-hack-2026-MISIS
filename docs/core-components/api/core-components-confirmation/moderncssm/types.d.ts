import { type ComponentType, type CSSProperties, type ReactNode } from 'react';
export interface ConfirmationProps {
    /**
     * Экран компонента
     */
    screen: ConfirmationScreen | string;
    /**
     * Состояние компонента
     */
    state: ConfirmationState | string;
    /**
     * Мобильная версия компонента для экрана
     */
    mobile?: boolean;
    /**
     * Позиционирование контента
     */
    alignContent?: 'left' | 'center';
    /**
     * HTML тег для заголовка
     * @default 'h3'
     */
    titleTag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
    /**
     * Объект с текстами
     */
    texts?: ConfirmationTexts;
    /**
     * Количество символов, которое можно ввести в поле ввода подписания до того, как произойдет автоотправка
     */
    requiredCharAmount?: number;
    /**
     * Длительность обратного отсчета на кнопке повторного запроса сообщения, в милисекундах
     */
    countdownDuration?: number;
    /**
     * Продолжительность блокировки формы (ms)
     */
    tempBlockDuration?: number;
    /**
     * Номер телефона, на который отправлен код
     */
    phone?: string;
    /**
     * Не осталось попыток ввода кода
     */
    blockSmsRetry?: boolean;
    /**
     * Идентификатор для систем автоматизированного тестирования
     */
    dataTestId?: string;
    /**
     * Сss класс для стилизации общей обёртки
     */
    className?: string;
    /**
     * Максимальная ширина контейнера компонента.
     * Для mobile по умолчанию используется 288px, если не передано значение.
     */
    maxWidth?: CSSProperties['maxWidth'];
    /**
     * Флаг - нужно ли очищать код при возникновении ошибки
     */
    clearCodeOnError?: boolean;
    /**
     * Функция обновления состояния компонента
     */
    onChangeState: (state: ConfirmationState | string) => void;
    /**
     * Функция обновления состояния компонента
     */
    onChangeScreen: (state: ConfirmationScreen | string) => void;
    /**
     * Обработчик события завершения ввода кода подписания
     */
    onInputFinished: (code: string) => void;
    /**
     * Обработчик события нажатия на кнопку "Запросить код"
     */
    onSmsRetryClick: () => void;
    /**
     * Клик по кнопке "Понятно" на экране фатальной ошибки
     */
    onFatalErrorOkButtonClick?: () => void;
    /**
     * Временная блокировка формы закончилась
     */
    onTempBlockFinished?: () => void;
    /**
     * Возвращает объект, где ключ - название экрана (screen), значение - компонент для экрана
     */
    getScreensMap?: (defaultScreensMap: ScreensMap) => ScreensMap;
    /**
     * Дочерние элементы
     */
    children?: ReactNode;
    /**
     * Скрыть секцию с повторной отправкой кода
     * @default false
     */
    hideCountdownSection?: boolean;
    /**
     *  Слот для контента с подсказкой на главном экране
     */
    initialScreenHintSlot?: ReactNode;
    /**
     * Контрольная точка для кнопки, с нее начинается desktop версия
     * @default 1024
     */
    breakpoint?: number;
    /**
     * Версия, которая будет использоваться при серверном рендеринге
     */
    client?: 'desktop' | 'mobile';
    /**
     * Продолжительность отображения ошибки
     * @default 1300
     */
    errorVisibleDuration?: number;
    /**
     * Ограничение навигации фокусом между ячейками
     * @default false
     */
    strictFocus?: boolean;
}
export type TConfirmationContext = Required<Pick<ConfirmationProps, 'alignContent' | 'titleTag' | 'texts' | 'state' | 'screen' | 'requiredCharAmount' | 'onInputFinished' | 'countdownDuration' | 'onChangeState' | 'onSmsRetryClick' | 'onChangeScreen' | 'onFatalErrorOkButtonClick' | 'tempBlockDuration' | 'hideCountdownSection' | 'strictFocus'>> & Pick<ConfirmationProps, 'phone' | 'blockSmsRetry' | 'onTempBlockFinished' | 'clearCodeOnError' | 'initialScreenHintSlot' | 'errorVisibleDuration' | 'breakpoint' | 'client'> & {
    timeLeft: number;
};
export interface ConfirmationTexts {
    /**
     * Экран INITIAL
     */
    title?: ReactNode;
    codeError?: string;
    codeErrorExpired?: string;
    codeErrorExpiredEnded?: string;
    codeChecking?: string;
    codeSending?: string;
    codeSended?: string;
    buttonRetry?: string;
    linkToHint?: string;
    noAttemptsLeft?: string;
    countdown?: string;
    /**
     * Экран HINT
     */
    hintTitle?: string;
    hintDescription?: string;
    hintNotification?: string;
    hintButton?: string;
    domesticPhone?: string;
    internationalPhone?: string;
    /**
     * Экран FATAL_ERROR
     */
    fatalErrorTitle?: ReactNode;
    fatalErrorDescription?: ReactNode;
    fatalErrorButton?: string;
    /**
     * Экран TEMP_BLOCK
     */
    tempBlockTitle?: ReactNode;
    tempBlockDescription?: ReactNode;
    /**
     * Экран TEMP_BLOCK_OVER
     */
    tempBlockOverTitle?: ReactNode;
    tempBlockOverDescription?: ReactNode;
    tempBlockOverButton?: string;
}
export type ConfirmationScreen = 'INITIAL' | 'HINT' | 'FATAL_ERROR' | 'TEMP_BLOCK' | 'TEMP_BLOCK_OVER';
export type ConfirmationState = 'INITIAL' | 'CODE_CHECKING' | 'CODE_SENDING' | 'CODE_ERROR' | 'CODE_EXPIRED' | 'CODE_EXPIRED_ENDED';
export interface ScreensMap {
    [key: string]: ComponentType;
}
export declare const defaultTexts: ConfirmationTexts;
