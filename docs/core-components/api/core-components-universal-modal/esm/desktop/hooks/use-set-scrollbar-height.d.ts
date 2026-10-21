import { type RefObject } from 'react';
interface Params {
    scrollbarRef: RefObject<HTMLDivElement>;
    verticalBarRef: RefObject<HTMLDivElement>;
    headerElementRef: RefObject<HTMLDivElement>;
    footerElementRef: RefObject<HTMLDivElement>;
}
/** Устанавливает отсупы для scrollbar в зависимости от высоты хедера и футера */
export declare const useSetScrollbarHeight: (params: Params) => void;
export {};
