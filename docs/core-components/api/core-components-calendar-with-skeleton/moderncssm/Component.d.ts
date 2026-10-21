import React from 'react';
import { type CalendarDesktopProps } from '@alfalab/core-components-calendar/moderncssm/desktop';
export type CalendarWithSkeletonProps = CalendarDesktopProps & {
    /**
     * Флаг включения анимации скелета
     */
    animate?: boolean;
    /**
     * Флаг управлением видимостью календаря
     */
    calendarVisible?: boolean;
};
export declare const CalendarWithSkeleton: React.ForwardRefExoticComponent<CalendarDesktopProps & {
    /**
     * Флаг включения анимации скелета
     */
    animate?: boolean;
    /**
     * Флаг управлением видимостью календаря
     */
    calendarVisible?: boolean;
} & React.RefAttributes<HTMLDivElement>>;
