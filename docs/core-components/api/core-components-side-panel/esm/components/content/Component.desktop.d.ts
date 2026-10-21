import { type FC } from 'react';
import { type ContentProps } from './Component';
export type ContentDesktopProps = ContentProps & {
    /**
     * Размер (только для desktop версии компонента)
     */
    size?: 's' | 500;
};
export declare const ContentDesktop: FC<ContentDesktopProps>;
