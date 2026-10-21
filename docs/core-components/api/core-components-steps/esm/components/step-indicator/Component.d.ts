import React from 'react';
import { type BadgeProps } from '@alfalab/core-components-badge/esm';
import { type StatusBadgeProps } from '@alfalab/core-components-status-badge/esm';
/** @description В `@alfalab/core-components@51.0.0` тип будет изменен на Pick<StatusBadgeProps, 'view' | 'className' | 'colors'> */
export type StepIndicatorProps = Pick<BadgeProps, 'content' | 'iconColor' | 'className'>;
type StatusBadgeIndicatorProps = Pick<StatusBadgeProps, 'view' | 'className' | 'colors'>;
export declare const StepIndicator: React.FC<StatusBadgeIndicatorProps>;
export {};
