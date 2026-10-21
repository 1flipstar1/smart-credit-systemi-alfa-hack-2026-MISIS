import React, { type ChangeEvent, type FocusEvent, type MouseEvent, type ReactNode } from 'react';
export type Direction = 'horizontal' | 'vertical';
export type CheckboxGroupType = 'checkbox' | 'tag';
export type BaseCheckboxGroupProps = {
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
    type?: CheckboxGroupType;
    /**
     * Дополнительный класс
     */
    className?: string;
    /**
     * Отображение ошибки
     */
    error?: ReactNode | boolean;
    /**
     * Текст подсказки снизу
     */
    hint?: ReactNode;
    /**
     * Дочерние элементы. Ожидаются компоненты `Checkbox` или `Tag`
     */
    children: ReactNode;
    /**
     * Обработчик изменения значения 'checked' одного из дочерних компонентов
     */
    onChange?: (event: ChangeEvent | MouseEvent, payload: {
        checked: boolean;
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
     * Управление возможностью изменения состояния 'checked' дочерних компонентов CheckBox
     */
    disabled?: boolean;
    /**
     * Идентификатор для систем автоматизированного тестирования
     */
    dataTestId?: string;
    /**
     * Основные стили компонента.
     */
    styles: {
        [key: string]: string;
    };
};
export declare const BaseCheckboxGroup: React.ForwardRefExoticComponent<BaseCheckboxGroupProps & React.RefAttributes<HTMLDivElement>>;
