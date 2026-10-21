import { type ReactNode } from 'react';
export interface PortalProps {
    /**
     *  Контент
     */
    children?: ReactNode;
    /**
     * Функция, возвращающая контейнер, в который будут рендериться дочерние элементы
     */
    getPortalContainer?: () => Element | null | undefined;
    /**
     * Немедленно отрендерить дочерние элементы (false - контент будет отрендерен на след. рендер).
     */
    immediateMount?: boolean;
}
export declare const Portal: import("react").ForwardRefExoticComponent<PortalProps & import("react").RefAttributes<Element | null | undefined>>;
