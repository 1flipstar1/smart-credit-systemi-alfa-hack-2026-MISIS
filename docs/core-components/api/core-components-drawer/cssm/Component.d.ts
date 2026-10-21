import React from 'react';
import { type TransitionProps } from 'react-transition-group/Transition';
import { BaseModalContext, type BaseModalProps } from '@alfalab/core-components-base-modal/cssm';
export declare const ANIMATION_DURATION = 600;
export type DrawerProps = Omit<BaseModalProps, 'container'> & {
    /**
     * Край экрана, с которого может появиться Drawer.
     * @default "right"
     */
    placement?: 'left' | 'right';
    /**
     * Нужно ли использовать нативный скроллбар
     * @default true
     */
    nativeScrollbar?: boolean;
    /**
     * Пропсы для анимации контента (CSSTransition)
     */
    contentTransitionProps?: Partial<TransitionProps>;
};
export declare const DrawerContext: React.Context<BaseModalContext>;
export declare const Drawer: React.ForwardRefExoticComponent<Omit<BaseModalProps, "container"> & {
    /**
     * Край экрана, с которого может появиться Drawer.
     * @default "right"
     */
    placement?: "left" | "right";
    /**
     * Нужно ли использовать нативный скроллбар
     * @default true
     */
    nativeScrollbar?: boolean;
    /**
     * Пропсы для анимации контента (CSSTransition)
     */
    contentTransitionProps?: Partial<TransitionProps>;
} & React.RefAttributes<HTMLDivElement>>;
