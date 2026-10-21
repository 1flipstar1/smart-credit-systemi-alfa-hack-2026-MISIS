import { Amount as DefaultAmount } from './component';
import { PureAmount } from './pure';
type AmountType = typeof DefaultAmount & {
    Pure: typeof PureAmount;
};
export declare const Amount: AmountType;
export * from './types';
export { DefaultAmount as AmountComponent, PureAmount as Pure };
