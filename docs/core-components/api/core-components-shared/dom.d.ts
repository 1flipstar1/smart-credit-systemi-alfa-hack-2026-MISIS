import type React from 'react';
declare function preventDefault(e: React.UIEvent): void;
export declare const dom: {
    preventDefault: typeof preventDefault;
};
export declare function getElementWindow(element: Element): typeof window;
export {};
