import React, { type HTMLAttributes, type MouseEvent, type ReactNode } from 'react';
import { type IconButtonProps } from '@alfalab/core-components-icon-button';
import { type StatusBadgeCustomIcon, type StatusBadgeViews } from '@alfalab/core-components-status-badge';
export type BaseToastPlateProps = HTMLAttributes<HTMLDivElement> & {
    /**
     * Дополнительный класс
     */
    className?: string;
    /**
     * Дополнительный класс для заголовка
     */
    titleClassName?: string;
    /**
     * Дополнительный класс для контентной области
     */
    contentClassName?: string;
    /**
     * Дополнительный класс для области с кнопкой действия
     */
    actionSectionClassName?: string;
    /**
     * Дочерние элементы
     */
    children?: ReactNode;
    /**
     * Заголовок компонента
     */
    title?: ReactNode;
    /**
     * Жирный заголовок
     */
    boldTitle?: boolean;
    /**
     * Вид бэйджа
     */
    badge?: StatusBadgeViews;
    /**
     * Слот слева, заменяет стандартную иконку
     */
    leftAddons?: ReactNode;
    /**
     * Кнопка действия
     */
    actionButton?: ReactNode;
    /**
     * Идентификатор для систем автоматизированного тестирования
     */
    dataTestId?: string;
    /**
     * Управляет отображением кнопки закрытия уведомления
     * @deprecated Используйте пропс `closerProps`
     */
    hasCloser?: boolean;
    /**
     * Доп. класс враппера кнопки "закрыть".
     * @deprecated Используйте пропс `closerProps`
     */
    closerWrapperClassName?: string;
    /**
     * Доп. класс кнопки "закрыть".
     * @deprecated Используйте пропс `closerProps`
     */
    closerClassName?: string;
    /**
     * Параметры кнопки закрытия
     * @type {Object}
     * @property {boolean} [hasCloser] - Управляет отображением кнопки закрытия уведомления
     * @property {string} [closerWrapperClassName] - Дополнительный класс враппера кнопки "закрыть"
     * @property {string} [closerClassName] - Дополнительный класс кнопки "закрыть"
     * @property {boolean} [divider] - Показывать разделитель
     * @property {import('@alfalab/core-components-icon-button').IconButtonProps['view']} [view] - Вид кнопки закрытия
     * @default {{ hasCloser: false, closerWrapperClassName: undefined, closerClassName: undefined, divider: true, view: 'primary' }}
     */
    closerProps?: {
        hasCloser?: boolean;
        closerWrapperClassName?: string;
        closerClassName?: string;
        divider?: boolean;
        view?: IconButtonProps['view'];
    };
    /**
     * Растягивает компонент на ширину контейнера
     */
    block?: boolean;
    /**
     * Обработчик клика по крестику
     */
    onClose?: (event?: MouseEvent<HTMLButtonElement>) => void;
    /**
     * Функция, с помощью которой можно переопределить иконки в StatusBadge
     */
    getBadgeIcons?: StatusBadgeCustomIcon;
    /**
     * Набор цветов для компонента
     */
    colors?: 'default' | 'inverted';
    /**
     * Положение кнопки под заголовком компонента
     */
    bottomButtonPosition?: boolean;
    /**
     * Основные стили компонента.
     */
    styles?: {
        [key: string]: string;
    };
};
export declare const BaseToastPlate: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLDivElement> & {
    /**
     * Дополнительный класс
     */
    className?: string;
    /**
     * Дополнительный класс для заголовка
     */
    titleClassName?: string;
    /**
     * Дополнительный класс для контентной области
     */
    contentClassName?: string;
    /**
     * Дополнительный класс для области с кнопкой действия
     */
    actionSectionClassName?: string;
    /**
     * Дочерние элементы
     */
    children?: ReactNode;
    /**
     * Заголовок компонента
     */
    title?: ReactNode;
    /**
     * Жирный заголовок
     */
    boldTitle?: boolean;
    /**
     * Вид бэйджа
     */
    badge?: StatusBadgeViews;
    /**
     * Слот слева, заменяет стандартную иконку
     */
    leftAddons?: ReactNode;
    /**
     * Кнопка действия
     */
    actionButton?: ReactNode;
    /**
     * Идентификатор для систем автоматизированного тестирования
     */
    dataTestId?: string;
    /**
     * Управляет отображением кнопки закрытия уведомления
     * @deprecated Используйте пропс `closerProps`
     */
    hasCloser?: boolean;
    /**
     * Доп. класс враппера кнопки "закрыть".
     * @deprecated Используйте пропс `closerProps`
     */
    closerWrapperClassName?: string;
    /**
     * Доп. класс кнопки "закрыть".
     * @deprecated Используйте пропс `closerProps`
     */
    closerClassName?: string;
    /**
     * Параметры кнопки закрытия
     * @type {Object}
     * @property {boolean} [hasCloser] - Управляет отображением кнопки закрытия уведомления
     * @property {string} [closerWrapperClassName] - Дополнительный класс враппера кнопки "закрыть"
     * @property {string} [closerClassName] - Дополнительный класс кнопки "закрыть"
     * @property {boolean} [divider] - Показывать разделитель
     * @property {import('@alfalab/core-components-icon-button').IconButtonProps['view']} [view] - Вид кнопки закрытия
     * @default {{ hasCloser: false, closerWrapperClassName: undefined, closerClassName: undefined, divider: true, view: 'primary' }}
     */
    closerProps?: {
        hasCloser?: boolean;
        closerWrapperClassName?: string;
        closerClassName?: string;
        divider?: boolean;
        view?: IconButtonProps["view"];
    };
    /**
     * Растягивает компонент на ширину контейнера
     */
    block?: boolean;
    /**
     * Обработчик клика по крестику
     */
    onClose?: (event?: MouseEvent<HTMLButtonElement>) => void;
    /**
     * Функция, с помощью которой можно переопределить иконки в StatusBadge
     */
    getBadgeIcons?: StatusBadgeCustomIcon;
    /**
     * Набор цветов для компонента
     */
    colors?: "default" | "inverted";
    /**
     * Положение кнопки под заголовком компонента
     */
    bottomButtonPosition?: boolean;
    /**
     * Основные стили компонента.
     */
    styles?: {
        [key: string]: string;
    };
} & React.RefAttributes<HTMLDivElement>>;
