import React from 'react';
export declare type HatchingProgressBarProps = {
    /**
     * Значение заполненной части 0-100
     */
    value: number;
    /**
     * Значение будущей заполненной части 0-100
     */
    hatchValue: number;
    /**
     * Css-класс для стилизации
     */
    className?: string;
    /**
     * Цвет заполнения
     */
    view?: 'positive' | 'negative' | 'attention' | 'link' | 'tertiary' | 'secondary' | 'primary' | 'accent';
    /**
     * Id компонента для тестов
     */
    dataTestId?: string;
};
export declare const HatchingProgressBar: React.ForwardRefExoticComponent<HatchingProgressBarProps & React.RefAttributes<HTMLDivElement>>;
