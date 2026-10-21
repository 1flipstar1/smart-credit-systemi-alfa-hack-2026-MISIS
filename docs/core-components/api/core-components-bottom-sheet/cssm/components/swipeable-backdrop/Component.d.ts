import { type FC } from 'react';
import { type SwipeableHandlers } from 'react-swipeable';
import { type BackdropProps } from '@alfalab/core-components-backdrop/cssm';
export type SwipeableBackdropProps = BackdropProps & {
    /**
     * Прозрачность бэкдропа
     */
    opacity?: number;
    /**
     * Обработчики свайпа
     */
    handlers?: SwipeableHandlers;
    /**
     * Время анимации opacity
     */
    opacityTimeout?: number;
};
export declare const SwipeableBackdrop: FC<SwipeableBackdropProps>;
