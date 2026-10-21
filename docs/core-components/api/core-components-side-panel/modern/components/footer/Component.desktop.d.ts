import { type FC } from 'react';
import { type FooterProps } from './Component';
export type FooterDesktopProps = FooterProps & {
    /**
     * Размер (только для desktop версии компонента)
     */
    size?: 's' | 500;
};
export declare const FooterDesktop: FC<FooterDesktopProps>;
