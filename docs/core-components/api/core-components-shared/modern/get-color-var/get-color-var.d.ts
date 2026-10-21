import { type Color, type Theme } from './types';
/**
 * Возвращает css переменную для цвета, либо сам цвет (если передан не через переменную)
 *
 * Примеры результатов:
 * - figma переменная: var(--color-light-bg-secondary)
 * - HEX: #444fff
 *
 * @deprecated Используйте getColorVar из ds-helpers
 */
export declare const getColorVar: ({ color, prefix, theme, }: {
    /**
     * Имя переменной в figma для цвета или HEX
     * Пример: backgroundColorAccent, #ccc
     */
    color?: Color;
    /**
     * Префикс для переменной css
     * @default ''
     */
    prefix?: string;
    /**
     * Тема
     * @default 'light'
     */
    theme?: Theme;
}) => string | undefined;
