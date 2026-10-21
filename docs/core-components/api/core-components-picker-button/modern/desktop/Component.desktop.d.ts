import React, { type ComponentType, type SVGProps } from 'react';
import { type ButtonProps } from '@alfalab/core-components-button/modern';
import { type BaseSelectProps } from '@alfalab/core-components-select/modern/shared';
import { type PickerButtonSize, type PickerButtonVariant } from '../types';
export type PickerButtonDesktopProps = Omit<BaseSelectProps, 'placeholder' | 'Arrow' | 'autocomplete' | 'size' | 'onFocus' | 'selected' | 'closeOnSelect' | 'multiple' | 'hint' | 'allowUnselect' | 'options' | 'searchProps' | 'showSearch' | 'Search'> & Pick<ButtonProps, 'view' | 'loading' | 'leftAddons' | 'rightAddons'> & {
    options: Array<BaseSelectProps['options'][0] & {
        /**
         * Иконка, отображающаяся слева от текстового представления пункта
         */
        icon?: ComponentType<SVGProps<SVGSVGElement>>;
    }>;
    /**
     * Размер кнопки
     * @default 56
     */
    size?: PickerButtonSize;
    /**
     * Тип кнопки
     */
    variant?: PickerButtonVariant;
    /**
     * Показывать стрелку
     * @default true
     */
    showArrow?: boolean;
    /**
     * Кастомная иконка при variant = compact
     */
    icon?: ComponentType<SVGProps<SVGSVGElement>>;
};
export declare const PickerButtonDesktop: React.ForwardRefExoticComponent<Omit<BaseSelectProps, "onFocus" | "size" | "hint" | "placeholder" | "selected" | "multiple" | "Arrow" | "autocomplete" | "closeOnSelect" | "allowUnselect" | "options" | "searchProps" | "showSearch" | "Search"> & Pick<ButtonProps, "view" | "rightAddons" | "leftAddons" | "loading"> & {
    options: Array<BaseSelectProps["options"][0] & {
        /**
         * Иконка, отображающаяся слева от текстового представления пункта
         */
        icon?: ComponentType<SVGProps<SVGSVGElement>>;
    }>;
    /**
     * Размер кнопки
     * @default 56
     */
    size?: PickerButtonSize;
    /**
     * Тип кнопки
     */
    variant?: PickerButtonVariant;
    /**
     * Показывать стрелку
     * @default true
     */
    showArrow?: boolean;
    /**
     * Кастомная иконка при variant = compact
     */
    icon?: ComponentType<SVGProps<SVGSVGElement>>;
} & React.RefAttributes<HTMLInputElement>>;
