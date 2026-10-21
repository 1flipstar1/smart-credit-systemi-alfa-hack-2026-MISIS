import { type GroupShape, type OptionShape } from '@alfalab/core-components-select/modern/shared';
import { type OptionMatcher, type SelectWithTagsProps } from '../types';
export declare const filterOptions: (options: SelectWithTagsProps["options"], inputValue: string, math?: OptionMatcher) => GroupShape[] | OptionShape[];
