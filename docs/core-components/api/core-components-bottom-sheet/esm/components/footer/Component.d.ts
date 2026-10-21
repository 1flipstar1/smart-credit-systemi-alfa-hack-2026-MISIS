import { type FC, type ReactNode } from 'react';
import { type ColorType } from '../../types';
export type FooterProps = {
    /**
     * Контент футера
     */
    children?: ReactNode;
    /**
     * Фиксирует футер
     */
    sticky?: boolean;
    /**
     * Дополнительный класс
     */
    className?: string;
    /**
     * Идентификатор для систем автоматизированного тестирования
     */
    dataTestId?: string;
    /**
     * Набор цветов для компонента
     * @default default
     */
    colors?: ColorType;
};
export declare const Footer: FC<FooterProps>;
