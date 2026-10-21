import React, { type MouseEvent, type ReactNode } from 'react';
import { type CSSTransitionClassNames } from 'react-transition-group/CSSTransition';
import { type TransitionProps } from 'react-transition-group/Transition';
export type BackdropProps = Partial<TransitionProps> & {
    /**
     * Прозрачный бэкдроп
     * @deprecated данное свойство больше не используется, временно оставлено для обратной совместимости
     * Используйте свойство transparent
     */
    invisible?: boolean;
    /**
     * Управляет видимостью компонента
     */
    open: boolean;
    /**
     * Обработчик клика по бэкдропу
     */
    onClose?: (event: MouseEvent<HTMLElement>) => void;
    /**
     * Дополнительный класс
     */
    className?: string;
    /**
     * Классы анимации
     *
     * http://reactcommunity.org/react-transition-group/css-transition#CSSTransition-prop-classNames
     */
    transitionClassNames?: string | CSSTransitionClassNames;
    /**
     * Идентификатор для систем автоматизированного тестирования
     */
    dataTestId?: string;
    /**
     * Дочерние элементы.
     */
    children?: ReactNode;
    /**
     * Управляет прозрачностью бэкдроп
     * @default false
     */
    transparent?: boolean;
};
export declare const Backdrop: React.FC<BackdropProps>;
