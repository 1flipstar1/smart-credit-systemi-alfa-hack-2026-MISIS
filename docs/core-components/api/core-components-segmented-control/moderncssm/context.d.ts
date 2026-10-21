import { type IDType } from './typing';
export type ContextType = {
    onChange: (id: IDType) => void;
    colors?: 'default' | 'inverted';
};
export declare const SegmentedControlContext: import("react").Context<ContextType>;
