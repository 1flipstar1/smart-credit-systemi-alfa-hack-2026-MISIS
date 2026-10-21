import { type FC } from 'react';
export type OverlayProps = {
    /**
     * Подпись для заглушки
     */
    text?: string;
    /**
     * Управление видимостью
     */
    visible?: boolean;
};
export declare const Overlay: FC<OverlayProps>;
