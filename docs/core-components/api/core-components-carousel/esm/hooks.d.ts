export interface Coords {
    startX: number | null;
    startY: number | null;
    currentX: number | null;
    currentY: number | null;
    previousX: number | null;
    previousY: number | null;
}
export type CoordsCallback = (coords: Coords) => void;
export type SwipeCallback = (coords: Coords, data: SwipeData) => void;
export interface SwipeData {
    pointerId: number | null;
    touchId: number | null;
    isTouched: boolean;
    isMoved: boolean;
    isScrolling?: boolean;
    startMoving?: boolean;
    startTime: number | null;
    allowClick: boolean;
}
interface SwipeListeners {
    onStartSwipe?: SwipeCallback;
    onSwiping?: SwipeCallback;
    onStopSwipe?: SwipeCallback;
}
interface Listeners {
    onStartSwipe?: (coords: Coords) => void;
    onSwiping?: (coords: Coords) => void;
    onStopSwipe?: (coords: Coords) => void;
}
interface XY {
    x: number;
    y: number;
}
export declare function useSwipe<T extends Element>(direction: 'x' | 'y', listeners: SwipeListeners, options?: {
    touchAngle?: number;
    threshold?: number;
    edgeThreshold?: Partial<XY>;
    touchMoveStopPropagation?: boolean;
    captureEvent?: boolean;
}): [ref: React.Ref<T>, getStyle: () => React.CSSProperties];
export declare function useMouseWheel<T extends Element>(direction: 'x' | 'y', listeners: Listeners, options?: {
    angle?: number;
}): [ref: React.Ref<T>];
export {};
