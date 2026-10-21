import React from 'react';
import { type BaseSelectProps, type OptionProps, type OptionShape } from '../../typings';
type useSelectWithLoadingProps = {
    loading?: boolean;
    visibleOptions?: BaseSelectProps['visibleOptions'];
    Option?: React.FC<OptionProps>;
};
export declare function useSelectWithLoading({ loading, visibleOptions, Option, }: useSelectWithLoadingProps): {
    Option: (props: OptionProps) => React.JSX.Element;
    options: OptionShape[];
} | null;
export {};
