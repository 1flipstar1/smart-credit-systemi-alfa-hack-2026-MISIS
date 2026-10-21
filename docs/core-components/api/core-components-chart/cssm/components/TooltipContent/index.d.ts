import React from 'react';
import { type PayloadProps } from '../../types/payload.types';
import { type SeriaProps } from '../../types/seria.types';
import { type TooltipProps } from '../../types/tooltip.types';
export interface TooltipContentProps extends TooltipProps {
    payload: PayloadProps[];
    series: SeriaProps[];
}
export declare const TooltipContent: React.ForwardRefExoticComponent<TooltipContentProps & React.RefAttributes<HTMLDivElement>>;
