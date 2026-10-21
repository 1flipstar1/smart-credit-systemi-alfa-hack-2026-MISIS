import { type XAxisProps } from '../xAxis.types';
export interface TickProps {
    payload: {
        coordinate: number;
        value: number;
    };
    /**
     * Функция форматирования
     */
    tickFormatter: (value: number | string) => React.ReactText;
    x: number;
    y: number;
    /**
     * Настройки оси Х
     */
    xAxis: XAxisProps;
}
