import { type RefObject, type WheelEvent } from 'react';
interface Params {
    overlay: boolean;
    refObject?: RefObject<HTMLDivElement>;
}
export declare const useScrollableContainerRef: ({ overlay, refObject }: Params) => {
    handleWheel: (e: WheelEvent<HTMLElement>) => void;
    scrollableContainerRef: RefObject<HTMLDivElement>;
};
export {};
