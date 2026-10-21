import React, { type ReactNode } from 'react';
import { type PlatformProps, type TabsProps } from '../../typings';
export type ScrollableContainerProps = {
    /**
     * Дополнительный класс враппера контейнера
     */
    containerWrapperClassName?: string;
    /**
     * Дополнительный класс контейнера
     */
    containerClassName?: string;
    /**
     * Дополнительный класс для контейнера кнопок прокрутки
     */
    scrollControlsClassName?: string;
    /**
     * Дополнительный класс для кнопок прокрутки
     */
    scrollControlsButtonClassName?: string;
    /**
     * Дочерние компоненты
     */
    children: ReactNode;
    /**
     * Активный элемент (всегда будет в видимой области)
     */
    activeChild: HTMLElement | null;
    /**
     * Внешний вид заголовков табов
     */
    view: Exclude<TabsProps['view'], undefined>;
    /**
     *  Размер
     */
    size: TabsProps['size'];
    /**
     * Дополнительные инлайн стили для заголовка
     */
    inlineStyle?: React.CSSProperties;
    /**
     * Показать скелетон
     */
    showSkeleton?: boolean;
};
export declare const ScrollableContainer: ({ containerWrapperClassName, containerClassName, scrollControlsClassName, scrollControlsButtonClassName, children, activeChild, fullWidthScroll, view, size, platform, inlineStyle, showSkeleton, }: ScrollableContainerProps & Pick<TabsProps, "fullWidthScroll"> & PlatformProps) => React.JSX.Element;
