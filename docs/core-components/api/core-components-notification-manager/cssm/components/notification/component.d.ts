import { type FC, type ReactElement } from 'react';
import { type CSSTransitionProps } from 'react-transition-group/CSSTransition';
import { type NotificationProps as CoreNotificationProps } from '@alfalab/core-components-notification/cssm';
export type NotificationElement = ReactElement<CoreNotificationProps & {
    id: string;
}>;
type NotificationTransitionProps = Partial<Pick<CSSTransitionProps<HTMLDivElement>, 'in' | 'onExited' | 'appear' | 'enter' | 'exit'>>;
interface NotificationProps extends NotificationTransitionProps {
    element: NotificationElement;
    className: string;
    onRemoveNotification: (id: string) => void;
}
export declare const Notification: FC<NotificationProps>;
export {};
