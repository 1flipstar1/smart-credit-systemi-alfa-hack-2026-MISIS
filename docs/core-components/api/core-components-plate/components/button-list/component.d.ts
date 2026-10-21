import { type FC, type ReactNode } from 'react';
export type ButtonListProps = {
    /**
     * Кнопки для рендера
     */
    buttons: ReactNode;
    /**
     * Дополнительный класс для контейнера
     */
    containerClassName?: string;
    /**
     * Дополнительный класс для кнопок
     */
    buttonClassName?: string;
};
export declare const ButtonList: FC<ButtonListProps>;
