import React from 'react';
export type ProgressBarProps = {
    /**
     * Значение заполненной части 0-100
     */
    value: number;
    /**
     * Css-класс для стилизации
     */
    className?: string;
    /**
     * Цвет заполнения
     */
    view?: 'positive' | 'negative' | 'attention' | 'link' | 'tertiary' | 'secondary' | 'primary' | 'accent';
    /**
     * Размер компонента
     * @default 8
     */
    size?: 4 | 8;
    /**
     * Id компонента для тестов
     */
    dataTestId?: string;
    /**
     * Набор цветов для компонента
     */
    colors?: 'default' | 'inverted';
};
export declare const ProgressBar: React.ForwardRefExoticComponent<ProgressBarProps & React.RefAttributes<HTMLDivElement>>;
