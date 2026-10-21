import React, { type HTMLAttributes } from 'react';
export type ScrollbarProps = {
    /**
     * Оборачиваемый элемент.
     */
    children?: React.ReactNode;
    /**
     * Дополнительный класс на корневой элемент.
     */
    className?: string;
    /**
     * Набор цветов для компонента
     */
    colors?: 'default' | 'inverted';
    /**
     * Растягивать контент по горизонтали по ширине содержимого.
     */
    horizontalAutoStretch?: boolean;
    /**
     * Название css свойства, которое устанавливается на контейнер при horizontalAutoStretch.
     */
    widthPropName?: 'minWidth' | 'width' | 'maxWidth';
    /**
     * Включает автоскрытие ползунка.
     */
    autoHide?: boolean;
    /**
     * Время в мс, определяющее задержку до исчезновения полосы прокрутки (при включенной опции autoHide).
     */
    autoHideTimeout?: number;
    /**
     * Принудительное отображение полосы прокрутки.
     */
    forceVisible?: boolean | 'x' | 'y';
    /**
     * Управление поведением клика по треку.
     * Если true, то будет выполняться прокрутка к месту клика.
     */
    clickOnTrack?: boolean;
    /**
     * HTML-aтрибуты на прокручиваемый узел.
     */
    scrollableNodeProps?: React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>;
    /**
     * HTML-aтрибуты на узел с контентом.
     */
    contentNodeProps?: React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>;
    /**
     * HTML-aтрибуты маски.
     */
    maskProps?: React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>;
    /**
     * Дополнительный класс контейнера вертикальной полосы прокрутки
     */
    verticalBarClassName?: string;
    /**
     * Дополнительный класс контейнера горизонтальной полосы прокрутки
     */
    horizontalBarClassName?: string;
    /**
     * Обработчик изменения скролла
     */
    onContentScroll?: (e: Event) => void;
    /**
     * Ref для вертикальной полосы прокрутки
     */
    verticalBarRef?: React.RefObject<HTMLDivElement>;
} & HTMLAttributes<HTMLDivElement>;
export declare const Scrollbar: React.ForwardRefExoticComponent<{
    /**
     * Оборачиваемый элемент.
     */
    children?: React.ReactNode;
    /**
     * Дополнительный класс на корневой элемент.
     */
    className?: string;
    /**
     * Набор цветов для компонента
     */
    colors?: "default" | "inverted";
    /**
     * Растягивать контент по горизонтали по ширине содержимого.
     */
    horizontalAutoStretch?: boolean;
    /**
     * Название css свойства, которое устанавливается на контейнер при horizontalAutoStretch.
     */
    widthPropName?: "minWidth" | "width" | "maxWidth";
    /**
     * Включает автоскрытие ползунка.
     */
    autoHide?: boolean;
    /**
     * Время в мс, определяющее задержку до исчезновения полосы прокрутки (при включенной опции autoHide).
     */
    autoHideTimeout?: number;
    /**
     * Принудительное отображение полосы прокрутки.
     */
    forceVisible?: boolean | "x" | "y";
    /**
     * Управление поведением клика по треку.
     * Если true, то будет выполняться прокрутка к месту клика.
     */
    clickOnTrack?: boolean;
    /**
     * HTML-aтрибуты на прокручиваемый узел.
     */
    scrollableNodeProps?: React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>;
    /**
     * HTML-aтрибуты на узел с контентом.
     */
    contentNodeProps?: React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>;
    /**
     * HTML-aтрибуты маски.
     */
    maskProps?: React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>;
    /**
     * Дополнительный класс контейнера вертикальной полосы прокрутки
     */
    verticalBarClassName?: string;
    /**
     * Дополнительный класс контейнера горизонтальной полосы прокрутки
     */
    horizontalBarClassName?: string;
    /**
     * Обработчик изменения скролла
     */
    onContentScroll?: (e: Event) => void;
    /**
     * Ref для вертикальной полосы прокрутки
     */
    verticalBarRef?: React.RefObject<HTMLDivElement>;
} & React.HTMLAttributes<HTMLDivElement> & React.RefAttributes<HTMLDivElement>>;
