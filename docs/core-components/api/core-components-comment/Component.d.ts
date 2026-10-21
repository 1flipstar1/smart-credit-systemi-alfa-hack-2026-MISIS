import React, { type ReactNode } from 'react';
export type CommentProps = {
    /**
     * Количество строк
     */
    rowLimit?: 2 | 5;
    /**
     *  Сss класс для стилизации общей обёртки
     */
    className?: string;
    /**
     * Id компонента для тестов
     */
    dataTestId?: string;
    /**
     * Дочерние элементы.
     */
    children?: ReactNode;
};
export declare const Comment: React.FC<CommentProps>;
