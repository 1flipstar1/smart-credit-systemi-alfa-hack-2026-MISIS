import { type Dispatch, type SetStateAction } from 'react';
import { type OptionsProps } from '../../types/options.types';
import { type DataDynamicBooleanProps, type DataDynamicProps } from '../../types/utils/data.types';
type Settings = [
    {
        state: OptionsProps | null;
        data: DataDynamicProps[];
        charts: DataDynamicBooleanProps;
        filterCount: number;
    },
    {
        setState: Dispatch<SetStateAction<OptionsProps | null>>;
        setData: Dispatch<SetStateAction<DataDynamicProps[]>>;
        setCharts: Dispatch<SetStateAction<DataDynamicBooleanProps>>;
        setFilterCount: Dispatch<SetStateAction<number>>;
    }
];
export declare const useSettings: (options: OptionsProps) => Settings;
export {};
