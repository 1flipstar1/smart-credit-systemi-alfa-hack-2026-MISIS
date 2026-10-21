import React, { type AriaAttributes, type ChangeEvent, type FocusEvent, type HTMLAttributes, type MouseEvent, type ReactNode } from 'react';
export type Direction = 'horizontal' | 'vertical';
export type RadioGroupType = 'radio' | 'tag';
export interface BaseRadioGroupProps extends Omit<HTMLAttributes<HTMLDivElement>, 'onChange' | 'onBlur' | 'onFocus' | 'children' | 'className'>, AriaAttributes {
    /**
     * Заголовок группы
     */
    label?: ReactNode;
    /**
     * Направление
     */
    direction?: Direction;
    /**
     * Тип компонента
     */
    type?: RadioGroupType;
    /**
     * Дополнительный класс
     */
    className?: string;
    /**
     * Дополнительный класс для списка радио элементов
     */
    radioListClassName?: string;
    /**
     * Отображение ошибки
     */
    error?: ReactNode | boolean;
    /**
     * Текст подсказки снизу
     */
    hint?: ReactNode;
    /**
     * Дочерние элементы. Ожидаются компоненты `Radio` или `Tag`
     */
    children: ReactNode;
    /**
     * Обработчик изменения значения 'checked' одного из дочерних компонентов
     */
    onChange?: (event: ChangeEvent | MouseEvent, payload: {
        value: string;
        name?: string;
    }) => void;
    /**
     * Обработчик блюра.
     */
    onBlur?: (event: FocusEvent<HTMLInputElement>) => void;
    /**
     * Обработчик фокуса.
     */
    onFocus?: (event: FocusEvent<HTMLInputElement>) => void;
    /**
     * Управление возможностью изменения состояния 'checked' дочерних компонентов Radio | Tag
     */
    disabled?: boolean;
    /**
     * Идентификатор для систем автоматизированного тестирования
     */
    dataTestId?: string;
    /**
     * Атрибут name для всех дочерних компонентов
     */
    name?: string;
    /**
     * Value выбранного дочернего элемента
     */
    value?: string | null;
    /**
     * Основные стили компонента.
     */
    styles: {
        [key: string]: string;
    };
}
export declare const BaseRadioGroup: React.ForwardRefExoticComponent<BaseRadioGroupProps & React.RefAttributes<HTMLDivElement>>;
