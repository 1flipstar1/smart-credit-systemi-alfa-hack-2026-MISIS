import React from 'react';
import { type LegendProps } from '../../types/legend.types';
import { type SeriaProps } from '../../types/seria.types';
import { type DataDynamicBooleanProps } from '../../types/utils/data.types';
interface Props {
    legend: LegendProps;
    series: SeriaProps[];
    id: string;
    charts: DataDynamicBooleanProps;
    toggleChart(item: SeriaProps): void;
}
export declare const Legends: React.ForwardRefExoticComponent<Props & React.RefAttributes<HTMLUListElement>>;
export {};
