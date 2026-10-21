import { type OptionsListProps } from '../typings';
type Params = Pick<OptionsListProps, 'nativeScrollbar' | 'client'>;
export declare const useNativeScrollbar: (params: Params) => boolean;
export {};
