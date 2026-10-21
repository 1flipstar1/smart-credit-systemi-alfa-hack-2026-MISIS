import { type FC } from 'react';
import { type BaseCheckboxGroupProps } from './components/base-checkbox-group';
export type CheckboxGroupProps = Omit<BaseCheckboxGroupProps, 'styles'> & {
    /**
     * Контрольная точка, с нее начинается desktop версия
     * @default 1024
     */
    breakpoint?: number;
    /**
     * Версия, которая будет использоваться при серверном рендеринге
     */
    client?: 'desktop' | 'mobile';
    /**
     * Значение по-умолчанию для хука useMatchMedia
     * @deprecated Используйте client
     */
    defaultMatchMediaValue?: boolean | (() => boolean);
};
export declare const CheckboxGroup: FC<CheckboxGroupProps>;
