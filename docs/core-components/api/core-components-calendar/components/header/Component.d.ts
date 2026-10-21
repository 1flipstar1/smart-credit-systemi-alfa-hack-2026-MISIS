import { type FC, type ReactNode } from 'react';
import { type SelectorView } from '../../typings';
export type HeaderProps = {
    /**
     * Вид шапки — месяц и год или только месяц
     */
    view?: SelectorView;
    /**
     * Отображать тень? (нужна при прокрутке)
     */
    withShadow?: boolean;
    /**
     * Дочерние элементы.
     */
    children?: ReactNode;
    /**
     * Дополнительный класс
     */
    className?: string;
};
export declare const Header: FC<HeaderProps>;
