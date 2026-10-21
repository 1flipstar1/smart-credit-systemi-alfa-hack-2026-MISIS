type VisualViewportSize = Pick<VisualViewport, 'height' | 'offsetLeft' | 'offsetTop' | 'pageLeft' | 'pageTop' | 'scale' | 'width'>;
export declare function useVisualViewportSize(): VisualViewportSize | null;
/**
 * @deprecated use {@link useVisualViewportSize}
 */
export declare function useVisibleViewportSize(enabled?: boolean): VisualViewportSize | null;
export {};
