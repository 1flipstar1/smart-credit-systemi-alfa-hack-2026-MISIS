import { type FC, type MouseEvent } from 'react';
export type PeriodType = 'range' | 'day' | 'week' | 'month' | 'quarter' | 'year';
export type PeriodSliderProps = {
    /**
     * Активная дата или период
     */
    value?: Date | [Date, Date];
    /**
     * Тип периода
     */
    periodType?: PeriodType;
    /**
     * Дополнительный класс
     */
    className?: string;
    /**
     * Отключает кнопку назад
     */
    prevArrowDisabled?: boolean;
    /**
     * Отключает кнопку вперед
     */
    nextArrowDisabled?: boolean;
    /**
     * Скрывает заблокированные кнопки
     */
    hideDisabledArrows?: boolean;
    /**
     * Возможность выбора месяца и года, если periodType 'month'
     */
    isMonthAndYearSelectable?: boolean;
    /**
     * Отображать ли текущий год, если isMonthAndYearSelectable true
     */
    showCurrentYearSelector?: boolean;
    /**
     * Функция для форматирование выбранного периода
     */
    periodFormatter?: (valueFrom: Date, valueTo: Date, periodType: PeriodType) => string;
    /**
     * Обработчик нажатия кнопки переключения на назад
     */
    onPrevArrowClick?: (event: MouseEvent<HTMLButtonElement>, payload: {
        value: Date;
        valueFrom: Date;
        valueTo: Date;
        periodType: PeriodType;
    }) => void;
    /**
     * Обработчик нажатия кнопки переключения на вперед
     */
    onNextArrowClick?: (event: MouseEvent<HTMLButtonElement>, payload: {
        value: Date;
        valueFrom: Date;
        valueTo: Date;
        periodType: PeriodType;
    }) => void;
    /**
     * Обработчик нажатия на селектор месяца
     */
    onMonthClick?: (event: MouseEvent<HTMLButtonElement>) => void;
    /**
     * Обработчик нажатия на селектор года
     */
    onYearClick?: (event: MouseEvent<HTMLButtonElement>) => void;
    /**
     * Обработчик нажатия на период
     */
    onPeriodClick?: (event: MouseEvent<HTMLAnchorElement>) => void;
    /**
     * Идентификатор для систем автоматизированного тестирования
     */
    dataTestId?: string;
    /**
     * Отображаемый текст, когда слайдеру не переданы значения c датами value={...}
     * @default 'Укажите период'
     */
    emptyValueText?: string;
};
export declare const PeriodSlider: FC<PeriodSliderProps>;
