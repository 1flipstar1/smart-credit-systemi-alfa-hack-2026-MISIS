import { type FC } from 'react';
import { type BackdropProps } from '@alfalab/core-components-backdrop/cssm';
export type PopupBackdropProps = BackdropProps & {
    /**
     * Прозрачность бэкдропа
     */
    opacity?: number;
    /**
     * Время анимации opacity
     */
    opacityTimeout?: number;
};
export declare const PopupBackdrop: FC<BackdropProps>;
