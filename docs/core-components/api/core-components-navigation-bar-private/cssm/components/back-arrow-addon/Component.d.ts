import React from 'react';
type ColorType = 'default' | 'inverted';
export interface BackArrowAddonProps extends React.HTMLAttributes<HTMLButtonElement> {
    /**
     * Текст после иконки
     */
    text?: string | null;
    /**
     * Дополнительный класс
     */
    className?: string;
    /**
     * Вид компонента
     */
    view: 'mobile' | 'desktop';
    /**
     * Прозрачность текста
     */
    textOpacity?: number;
    /**
     * Обработчик клика
     */
    onClick?: () => void;
    /**
     * Набор цветов для компонента
     */
    colors?: ColorType;
}
export declare const BackArrowAddon: React.FC<BackArrowAddonProps>;
export {};
