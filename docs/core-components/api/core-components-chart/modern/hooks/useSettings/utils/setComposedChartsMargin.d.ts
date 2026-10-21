import { type BrushProps } from '../../../types/brush.types';
import { type ComposedChartProps } from '../../../types/composedChart.types';
import { type LegendProps } from '../../../types/legend.types';
import { type XAxisProps } from '../../../types/xAxis.types';
type ComposedChartsMarginResultProps = {
    top: number;
    bottom: number;
    left: number;
    right: number;
};
export declare const setComposedChartsMargin: (composeChart: ComposedChartProps, legend: LegendProps | undefined, brush: BrushProps | undefined, xAxis: XAxisProps) => ComposedChartsMarginResultProps;
export {};
