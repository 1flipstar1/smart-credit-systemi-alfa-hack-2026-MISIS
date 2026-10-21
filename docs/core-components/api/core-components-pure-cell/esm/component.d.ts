import React, { type AnchorHTMLAttributes, type ButtonHTMLAttributes, type ElementType, type HTMLAttributes } from 'react';
import { Comment } from '@alfalab/core-components-comment/esm';
import { Addon } from './components/addon';
import { Amount } from './components/amount';
import { AmountTitle } from './components/amount-title';
import { Category } from './components/category';
import { Content } from './components/content';
import { Footer } from './components/footer';
import { FooterButton } from './components/footer-button';
import { Graphics } from './components/graphics';
import { Main } from './components/main';
import { Text } from './components/text';
import { type PureCellElement } from './components/types';
import { PureCellContext } from './context';
export { PureCellContext };
type BasePureCellProps = {
    /**
     * Направление
     */
    direction?: 'horizontal' | 'vertical';
    /**
     * Сss класс для стилизации общей обёртки
     */
    className?: string;
    /**
     * Выводит ссылку в виде ячейки
     */
    href?: string;
    /**
     * Вертикальные отступы
     */
    verticalPadding?: 'airy' | 'default' | 'compact' | 'tiny' | 'none' | {
        /**
         * Вертикальный отступ сверху
         */
        top?: 'airy' | 'default' | 'compact' | 'tiny' | 'none';
        /**
         * Вертикальный отступ снизу
         */
        bottom?: 'airy' | 'default' | 'compact' | 'tiny' | 'none';
    };
    /**
     * Горизонтальные отступы
     */
    horizontalPadding?: 'left' | 'right' | 'both' | 'none' | {
        /**
         * Горизонтальный отступ слева
         */
        left?: 0 | 16 | 20;
        /**
         * Горизонтальный отступ справа
         */
        right?: 0 | 16 | 20;
    };
    /**
     * Позволяет использовать кастомный компонент для кнопки (например Link из роутера)
     */
    tag?: ElementType;
    /**
     * Компоненты
     */
    children: PureCellElement;
    /**
     * Идентификатор для систем автоматизированного тестирования
     */
    dataTestId?: string;
};
type AnchorPureCellProps = BasePureCellProps & AnchorHTMLAttributes<HTMLAnchorElement>;
type ButtonPureCellProps = BasePureCellProps & ButtonHTMLAttributes<HTMLButtonElement>;
type ElementPureCellProps = BasePureCellProps & HTMLAttributes<HTMLElement>;
export type PureCellProps = Partial<AnchorPureCellProps | ButtonPureCellProps | ElementPureCellProps>;
declare const PureCellComponent: React.ForwardRefExoticComponent<PureCellProps & React.RefAttributes<HTMLElement>>;
declare const ExtraSubtitle: React.FC<import("./components/footer-text").FooterTextProps>;
/**
 * Универсальный конструктор для сборки любой ячейки.
 *
 * [Макет](https://www.figma.com/file/KlFOLLkKO8rtvvQE3RXuhq/Click-Library?node-id=43525%3A240018)
 */
declare const PureCell: React.ForwardRefExoticComponent<PureCellProps & React.RefAttributes<HTMLElement>> & {
    Main: React.FC<{
        children: import("./components/types").MainElement;
        isReverse?: boolean;
        className?: string;
        dataTestId?: string;
        onClick?: () => void;
    }>;
    Graphics: React.FC<import("./components/graphics").Props>;
    Content: React.FC<{
        children: import("./components/types").ContentElement;
        dataTestId?: string;
    }>;
    Text: React.FC<{
        children?: React.ReactNode;
        rowLimit?: 1 | 2;
        view?: "primary-large" | "primary-medium" | "primary-small" | "component-primary" | "component-secondary" | "secondary-large";
        titleWeight?: "regular" | "bold";
        titleColor: import("@alfalab/core-components-typography").Color;
        value?: React.ReactNode;
        valueColor?: import("@alfalab/core-components-typography").Color;
        dataTestId?: string;
    }>;
    Amount: React.FC<{
        weight?: "bold" | "normal";
        textView?: "component-primary" | "primary-small";
        color?: import("@alfalab/core-components-typography").Color;
        hidden?: boolean;
        dataTestId?: string;
    } & Omit<import("./components/typesProps").AmountProps, "dataTestId">>;
    AmountTitle: React.FC<{
        titleProps?: import("@alfalab/core-components-typography").TitleProps;
        hidden?: boolean;
        dataTestId?: string;
    } & Omit<import("./components/typesProps").AmountProps, "dataTestId">>;
    Addon: React.FC<{
        verticalAlign?: "auto" | "top" | "center" | "bottom";
        addonPadding?: "default" | "none";
        children: import("./components/types").AddonElement;
        dataTestId?: string;
        onClick?: () => void;
    }>;
    Footer: React.FC<{
        children: import("./components/types").FooterElement;
        footerPadding?: "default" | "none";
        dataTestId?: string;
        className?: string;
    }>;
    ExtraSubtitle: React.FC<import("./components/footer-text").FooterTextProps>;
    FooterButton: React.ForwardRefExoticComponent<(Omit<import("@alfalab/core-components-button").ButtonProps, "dataTestId"> & {
        dataTestId?: string;
    } & Partial<React.AnchorHTMLAttributes<HTMLAnchorElement> | React.ButtonHTMLAttributes<HTMLButtonElement>>) & React.RefAttributes<HTMLAnchorElement | HTMLButtonElement>>;
    Comment: React.FC<import("@alfalab/core-components-comment").CommentProps>;
    Category: React.FC<{
        categoryName: string;
        categoryPercent?: number;
        rightAddons?: React.ReactNode;
        dataTestId?: string;
    }>;
};
export { PureCell, PureCellComponent, Main, Graphics, Content, Text, Amount, AmountTitle, Addon, Footer, ExtraSubtitle, FooterButton, Comment, Category, };
