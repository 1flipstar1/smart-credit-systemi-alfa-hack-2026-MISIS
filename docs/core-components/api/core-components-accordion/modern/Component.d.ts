import { type AnchorHTMLAttributes, type FC, type ReactNode } from 'react';
import { type ControlPosition } from './typings';
export type AccordionProps = {
    /**
     * Состояние компонента
     */
    expanded?: boolean;
    /**
     * Элемент заголовка
     */
    header: ReactNode;
    /**
     * Слот для элемента управления
     */
    control?: ReactNode;
    /**
     * Указывает компоненту - где будет размещен control
     */
    controlPosition?: ControlPosition;
    /**
     * Начальное состояние uncontrolled компонента
     */
    defaultExpanded?: boolean;
    /**
     * Основной элемент для отображения содержимого
     */
    children?: ReactNode;
    /**
     * Дополнительный класс обертки
     */
    className?: string;
    /**
     * Дополнительный класс для контейнера с заголовком
     */
    containerClassName?: string;
    /**
     * Дополнительный класс для header
     */
    headerClassName?: string;
    /**
     * Дополнительный класс для control
     */
    controlClassName?: string;
    /**
     * Дополнительный класс для body
     */
    bodyClassName?: string;
    /**
     * Дополнительный класс для body content
     */
    bodyContentClassName?: string;
    /**
     * Обработчик смены состояний `expanded`
     */
    onExpandedChange?: (expanded: boolean) => void;
    /**
     * Идентификатор для систем автоматизированного тестирования
     */
    dataTestId?: string;
} & AnchorHTMLAttributes<HTMLDivElement>;
export declare const Accordion: FC<AccordionProps>;
