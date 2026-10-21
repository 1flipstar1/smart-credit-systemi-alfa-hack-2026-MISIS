import React, { type FC, type ReactNode, type RefAttributes } from 'react';
import { type InputProps } from '@alfalab/core-components-input';
export type withSuffixProps = InputProps & {
    /**
     * Дополнительный закрепленный текст справа от основного значения.
     * Например: value='85' suffix=' мес' -> 85 мес
     */
    suffix?: ReactNode;
    /**
     * Дополнительный класс для контейнера с суффиксом
     */
    suffixContainerClassName?: string;
};
export declare const withSuffix: (Input: FC<InputProps & RefAttributes<HTMLInputElement>>) => React.ForwardRefExoticComponent<Omit<import("@alfalab/core-components-input/components/base-input").BaseInputProps, "FormControlComponent"> & {
    breakpoint?: number;
    client?: "desktop" | "mobile";
    defaultMatchMediaValue?: boolean | (() => boolean);
} & {
    /**
     * Дополнительный закрепленный текст справа от основного значения.
     * Например: value='85' suffix=' мес' -> 85 мес
     */
    suffix?: ReactNode;
    /**
     * Дополнительный класс для контейнера с суффиксом
     */
    suffixContainerClassName?: string;
} & React.RefAttributes<HTMLInputElement>>;
