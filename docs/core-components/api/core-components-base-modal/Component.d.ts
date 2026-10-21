import React, { type ComponentType, type KeyboardEvent, type MouseEvent, type MutableRefObject, type ReactNode, type Ref, type WheelEvent } from 'react';
import { type CSSTransitionProps } from 'react-transition-group/CSSTransition';
import { type BackdropProps } from '@alfalab/core-components-backdrop';
import { type PortalProps } from '@alfalab/core-components-portal';
export type BaseModalProps = {
    /**
     * Контент
     */
    children?: ReactNode;
    /**
     * Компонент бэкдропа
     */
    Backdrop?: ComponentType<BackdropProps>;
    /**
     * Свойства для Бэкдропа
     */
    backdropProps?: Partial<BackdropProps> & Record<string, unknown>;
    /**
     * Нода, компонент или функция возвращающая их
     *
     * Контейнер к которому будут добавляться порталы
     */
    container?: PortalProps['getPortalContainer'];
    /**
     * Отключает автоматический перевод фокуса на модалку при открытии
     * @default false
     */
    disableAutoFocus?: boolean;
    /**
     * Отключает ловушку фокуса
     * @default false
     */
    disableFocusLock?: boolean;
    /**
     * Отключает восстановление фокуса на предыдущем элементе после закрытия модалки
     * @default false
     */
    disableRestoreFocus?: boolean;
    /**
     * Отключает вызов `callback` при нажатии Escape
     * @default false
     */
    disableEscapeKeyDown?: boolean;
    /**
     * Отключает вызов `callback` при клике на бэкдроп
     * @default false
     */
    disableBackdropClick?: boolean;
    /**
     * Отключает блокировку скролла при открытии модального окна
     * @default false
     * @deprecated Используйте `scrollLock={true}`.
     */
    disableBlockingScroll?: boolean;
    /**
     * Управляет блокировкой скролла/overscroll фона при открытой модалке.
     * @default false
     */
    scrollLock?: boolean;
    /**
     * Содержимое модалки всегда в DOM
     * @default false
     */
    keepMounted?: boolean;
    /**
     * Управление видимостью модалки
     */
    open: boolean;
    /**
     * Дополнительный класс
     */
    className?: string;
    /**
     * Дополнительный класс
     */
    contentClassName?: string;
    /**
     * Дополнительные пропсы на dialog wrapper
     */
    wrapperProps?: React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>;
    /**
     * Дополнительные пропсы на обертку контента
     */
    contentProps?: React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>;
    /**
     * Дополнительные пропсы на компонентную обертку контента
     */
    componentDivProps?: React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>;
    /**
     * Дополнительный класс для обертки (Modal)
     */
    wrapperClassName?: string;
    /**
     * Обработчик скролла контента
     */
    scrollHandler?: 'wrapper' | 'content' | MutableRefObject<HTMLDivElement | null>;
    /**
     * Скролл-контейнер занимает весь вьюпорт.
     * Если `false`, highlight для header/footer при скролле зависит только от позиции скролла,
     * без проверки того, где модалка находится на экране.
     * @default true
     */
    scrollContainerFillsViewport?: boolean;
    /**
     * Пропсы для анимации (CSSTransition)
     */
    transitionProps?: Partial<CSSTransitionProps>;
    /**
     * Рендерить ли в контейнер через портал.
     * @default true
     */
    usePortal?: boolean;
    /**
     * Обработчик события нажатия на бэкдроп
     */
    onBackdropClick?: (event: MouseEvent) => void;
    /**
     * Обработчик события нажатия на Escape
     *
     * Если `disableEscapeKeyDown` - false и модальное окно в фокусе
     */
    onEscapeKeyDown?: (event: KeyboardEvent) => void;
    /**
     * Обработчик закрытия
     */
    onClose?: (event: MouseEvent<HTMLElement> | KeyboardEvent<HTMLElement>, reason?: 'backdropClick' | 'escapeKeyDown' | 'closerClick') => void;
    /**
     * Обработчик события onEntered компонента Transition
     */
    onMount?: () => void;
    /**
     * Обработчик события onExited компонента Transition
     */
    onUnmount?: () => void;
    /**
     * Идентификатор для систем автоматизированного тестирования
     */
    dataTestId?: string;
    /**
     * z-index компонента
     */
    zIndex?: number;
    /**
     * Реф, который должен быть установлен компонентной области
     */
    componentRef?: MutableRefObject<HTMLDivElement | null>;
    /**
     * Реф контентной области
     */
    contentElementRef?: MutableRefObject<HTMLDivElement | null>;
    /**
     * Блокирует скролл когда модальное окно открыто. Работает только на iOS.
     * @deprecated Используйте `scrollLock={true}`.
     */
    iOSLock?: boolean;
    /**
     * Хэндлер события прокрутки колесиком
     */
    onWheel?: (e: WheelEvent<HTMLElement>) => void;
};
export type BaseModalContext = {
    parentRef: React.RefObject<HTMLDivElement>;
    componentRef: React.RefObject<HTMLDivElement>;
    hasFooter?: boolean;
    hasHeader?: boolean;
    hasScroll?: boolean;
    headerHighlighted?: boolean;
    footerHighlighted?: boolean;
    headerOffset?: number;
    setHeaderOffset: (offset: number) => void;
    contentRef: Ref<HTMLElement>;
    setHasHeader: (exists: boolean) => void;
    setHasFooter: (exists: boolean) => void;
    onClose: Required<BaseModalProps>['onClose'];
    setHeaderHighlighted: (value: boolean) => void;
    setFooterHighlighted: (value: boolean) => void;
};
export declare const BaseModalContext: React.Context<BaseModalContext>;
export declare const BaseModal: React.ForwardRefExoticComponent<BaseModalProps & React.RefAttributes<HTMLDivElement>>;
