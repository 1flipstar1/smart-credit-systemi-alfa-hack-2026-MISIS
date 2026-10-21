import React, { type MouseEvent, type RefObject } from 'react';
import { type ToastPlateDesktopProps } from '@alfalab/core-components-toast-plate/esm/desktop';
export type NotificationProps = ToastPlateDesktopProps & {
    /**
     * Управление видимостью компонента
     */
    visible?: boolean;
    /**
     * Отступ от верхнего края
     */
    offset?: number;
    /**
     * Время до закрытия компонента
     */
    autoCloseDelay?: number | null;
    /**
     * Использовать портал
     */
    usePortal?: boolean;
    /**
     * z-index компонента
     */
    zIndex?: number;
    /**
     * Позиционирование компонента от верхнего или нижнего края экрана
     */
    position?: 'top' | 'bottom';
    /**
     * Обработчик события истечения времени до закрытия компонента
     */
    onCloseTimeout?: () => void;
    /**
     * Обработчик события наведения курсора на компонент
     */
    onMouseEnter?: (event?: MouseEvent<HTMLDivElement>) => void;
    /**
     * Обработчик события снятия курсора с компонента
     */
    onMouseLeave?: (event?: MouseEvent<HTMLDivElement>) => void;
    /**
     * Обработчик клика вне компонента
     */
    onClickOutside?: (event?: MouseEvent<any>) => void;
    /**
     * Ссылка на контейнер компонента, к которому применяется анимация
     */
    containerRef?: RefObject<HTMLDivElement>;
};
export declare const Notification: React.ForwardRefExoticComponent<ToastPlateDesktopProps & {
    /**
     * Управление видимостью компонента
     */
    visible?: boolean;
    /**
     * Отступ от верхнего края
     */
    offset?: number;
    /**
     * Время до закрытия компонента
     */
    autoCloseDelay?: number | null;
    /**
     * Использовать портал
     */
    usePortal?: boolean;
    /**
     * z-index компонента
     */
    zIndex?: number;
    /**
     * Позиционирование компонента от верхнего или нижнего края экрана
     */
    position?: "top" | "bottom";
    /**
     * Обработчик события истечения времени до закрытия компонента
     */
    onCloseTimeout?: () => void;
    /**
     * Обработчик события наведения курсора на компонент
     */
    onMouseEnter?: (event?: MouseEvent<HTMLDivElement>) => void;
    /**
     * Обработчик события снятия курсора с компонента
     */
    onMouseLeave?: (event?: MouseEvent<HTMLDivElement>) => void;
    /**
     * Обработчик клика вне компонента
     */
    onClickOutside?: (event?: MouseEvent<any>) => void;
    /**
     * Ссылка на контейнер компонента, к которому применяется анимация
     */
    containerRef?: RefObject<HTMLDivElement>;
} & React.RefAttributes<HTMLDivElement>>;
