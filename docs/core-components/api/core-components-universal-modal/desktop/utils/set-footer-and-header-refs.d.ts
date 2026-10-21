import { type ReactElement, type ReactNode, type RefObject } from 'react';
interface Params {
    children: ReactNode;
    headerElementRef: RefObject<HTMLDivElement>;
    footerElementRef: RefObject<HTMLDivElement>;
}
/** Устанавливает рефы в хедер и футер если они переданы в модалку (необходимы для дальнейшего расчета высоты кастомного скроллбара) */
export declare const setFooterAndHeaderRefs: (params: Params) => {
    enhancedChildren: (string | number | ReactElement<any, string | import("react").JSXElementConstructor<any>> | Iterable<ReactNode>)[] | null | undefined;
};
export {};
