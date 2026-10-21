import { type SeriaProps } from '../../../types/seria.types';
import { type DataDynamicBooleanProps, type DataDynamicProps } from '../../../types/utils/data.types';
type DatasResultProps = [DataDynamicProps[], DataDynamicBooleanProps, number];
export declare const setDatas: (series: SeriaProps[], labels: Array<string | number>) => DatasResultProps;
export {};
