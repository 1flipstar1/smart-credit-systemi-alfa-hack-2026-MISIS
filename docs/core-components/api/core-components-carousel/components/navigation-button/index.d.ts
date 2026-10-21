import { type ComponentProps, type ElementType, type FC } from 'react';
interface NavigationButtonProps extends Pick<ComponentProps<'button'>, 'onClick' | 'disabled' | 'className'> {
    icon: ElementType<ComponentProps<'svg'>, 'svg'>;
    colors?: 'default' | 'inverted';
}
export declare const NavigationButton: FC<NavigationButtonProps>;
export {};
