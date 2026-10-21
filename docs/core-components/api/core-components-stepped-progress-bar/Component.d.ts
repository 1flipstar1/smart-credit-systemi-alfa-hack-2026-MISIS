import { type FC } from 'react';
export type SteppedProgressBarView = 'positive' | 'negative' | 'attention' | 'link' | 'tertiary' | 'secondary' | 'primary' | 'accent';
export type CustomProgressBarView = {
    background: string;
};
export type SteppedProgressBarViewValue = SteppedProgressBarView | CustomProgressBarView;
export interface SteppedProgressBarProps {
    /**
     * Общее количество шагов
     */
    maxStep: number;
    /**
     * Постфикс описание под прогрессбаром
     */
    description?: string;
    /**
     * Количество пройденных шагов
     */
    step?: number;
    /**
     * Цвет заполнения
     */
    view?: SteppedProgressBarViewValue | SteppedProgressBarViewValue[];
    /**
     * Идентификатор для систем автоматизированного тестирования
     */
    dataTestId?: string;
    /**
     * Набор цветов для компонента
     */
    colors?: 'default' | 'inverted';
    /**
     * Дополнительный класс
     */
    className?: string;
}
export declare const SteppedProgressBar: FC<SteppedProgressBarProps>;
