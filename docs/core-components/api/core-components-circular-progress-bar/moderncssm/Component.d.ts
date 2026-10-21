import React, { type ElementType, type ReactNode } from 'react';
import { type ComponentSize } from './types/component-size';
import { type TypographyColor } from './types/typography-color';
export type CircularProgressBarProps = {
    /**
     * Уровень прогресса, %
     */
    value: number | {
        /**
         * Время таймера в секундах
         * Минимальное значение 0
         * Максимальное значение 3600
         */
        timer: number;
        /**
         * Направлние отсчета таймера
         * forward: считаем от 0 до указанного значения
         * backward: считаем от указанного значения до 0
         * @default backward
         */
        counting?: 'forward' | 'backward';
        /**
         * Обработчик завершения таймера
         */
        onFinish?: () => void;
    };
    /**
     * Дополнительный класс
     */
    className?: string;
    /**
     * Основной текст
     */
    title?: ReactNode;
    /**
     * Цвет контента
     */
    contentColor?: TypographyColor | string;
    /**
     * Цвет заголовка
     * Приоритет выше чем у `contentColor`
     */
    titleColor?: TypographyColor | string;
    /**
     * Цвет подзаголовка
     * Приоритет выше чем у `contentColor`
     */
    subtitleColor?: TypographyColor | string;
    /**
     * Дополнительный текст
     */
    subtitle?: ReactNode;
    /**
     * Основной текст при 100%
     */
    titleComplete?: ReactNode;
    /**
     * Дополнительный текст при 100%
     */
    subtitleComplete?: ReactNode;
    /**
     * Цвет заполнения
     */
    view?: 'positive' | 'negative';
    /**
     * Размер (144 — 144×144px, 128 — 128×128px, 80 — 80×80px, 64 — 64×64px, 48 — 48×48px, 24 — 24×24px, 16 — 16×16px)
     * @default 64
     */
    size?: ComponentSize;
    /**
     * Наличие желоба
     */
    stroke?: boolean;
    /**
     * Заливка при 100%
     */
    fillComplete?: boolean;
    /**
     * Цвет текста при 100%
     */
    completeTextColor?: 'primary' | 'primary-inverted' | 'positive' | 'negative';
    /**
     * Цвет иконки при 100%
     */
    completeIconColor?: 'primary-inverted' | 'positive' | 'negative' | 'tertiary';
    /**
     * Компонент иконки
     */
    icon?: ElementType<{
        className?: string;
    }>;
    /**
     * Компонент иконки при 100%
     */
    iconComplete?: ElementType<{
        className?: string;
    }>;
    /**
     * Направление прогресса (clockwise - по часовой стрелке, counter-clockwise - против часовой стрелки)
     */
    direction?: 'clockwise' | 'counter-clockwise';
    /**
     * Высота компонента, min = 16; max = 144
     * использовать совместно с size:
     * 144 от 144
     * 128 от 128 до 143
     * 80 от 80 до 127
     * 64 от 64 до 79
     * 48 от 48 до 63
     * 24 от 24 до 47
     * 16 от 16 до 23
     */
    height?: number;
    /**
     * Id компонента для тестов
     */
    dataTestId?: string;
    /**
     * Дочерние элементы
     */
    children?: ReactNode;
    /**
     * Цвет прогресса
     */
    progressStrokeColor?: string;
    /**
     * Цвет заливки внутри круга
     */
    circleColor?: string;
    /**
     * Цвет желоба
     */
    strokeColor?: string;
    /**
     * Направление заполнения круга
     * @default desc
     */
    directionType?: 'asc' | 'desc';
};
/**
 * Компонент круглого прогресс бара.
 */
export declare const CircularProgressBar: React.FC<CircularProgressBarProps>;
