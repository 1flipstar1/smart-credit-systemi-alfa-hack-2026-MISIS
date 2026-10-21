import { type FC, type ReactNode } from 'react';
export type HeaderProps = {
    /**
     * Контент шапки
     */
    children?: ReactNode;
    /**
     * Отображать в мобильной версии экран компонента
     */
    mobile?: boolean;
    /**
     * HTML тег для заголовка
     * @default 'h3'
     */
    titleTag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
};
export declare const Header: FC<HeaderProps>;
