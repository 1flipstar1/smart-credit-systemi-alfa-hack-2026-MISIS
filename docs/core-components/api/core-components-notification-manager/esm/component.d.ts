import React, { type HTMLAttributes } from 'react';
import { type PortalProps } from '@alfalab/core-components-portal/esm';
import { type NotificationElement } from './components';
export interface NotificationManagerProps extends HTMLAttributes<HTMLDivElement> {
    /**
     * Массив нотификаций.
     * В нотификации обязательно передавайте id.
     */
    notifications: NotificationElement[];
    /**
     * Дополнительный класс (native prop)
     */
    className?: string;
    /**
     * Идентификатор для систем автоматизированного тестирования
     */
    dataTestId?: string;
    /**
     * z-index компонента
     */
    zIndex?: number;
    /**
     * Отступ от верхнего края
     */
    offset?: number;
    /**
     * Удаление нотификации
     */
    onRemoveNotification: (id: string) => void;
    /**
     * Нода, компонент или функция возвращающая их
     *
     * Контейнер к которому будут добавляться порталы
     */
    container?: PortalProps['getPortalContainer'];
}
export declare const NotificationManager: React.ForwardRefExoticComponent<NotificationManagerProps & React.RefAttributes<HTMLDivElement>>;
