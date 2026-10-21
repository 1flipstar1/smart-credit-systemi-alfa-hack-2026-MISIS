import { type GroupShape, type OptionShape } from '@alfalab/core-components-select/cssm/shared';
import { type OptionMatcher, type SelectWithTagsProps } from '../types';
export declare const filterOptions: (options: SelectWithTagsProps["options"], inputValue: string, math?: OptionMatcher) => GroupShape[] | OptionShape[];
