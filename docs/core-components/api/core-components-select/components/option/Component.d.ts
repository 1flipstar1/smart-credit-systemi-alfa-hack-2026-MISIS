import { type FC } from 'react';
import { type OptionCommonProps } from '../../typings';
import type stylesDesktop from './desktop/index.module.css';
import type stylesMobile from './mobile/index.module.css';
type OptionPrivateProps = {
    /**
     * Мобильная версия option.
     */
    mobile: boolean;
    /**
     * Стили
     */
    styles: typeof stylesDesktop | typeof stylesMobile;
};
export declare const OptionBase: FC<OptionCommonProps & OptionPrivateProps>;
export {};
