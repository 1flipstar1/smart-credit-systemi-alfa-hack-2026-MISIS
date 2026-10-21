import type React from 'react';
export declare const createSyntheticEvent: <T extends Element, E extends Event>(event: E) => React.SyntheticEvent<T, E>;
export declare const createUIEvent: <T extends Element, E extends Event>(event: E) => React.UIEvent<T, E>;
export declare const createSyntheticMouseEvent: <T extends Element>(event: MouseEvent) => React.MouseEvent<T, MouseEvent>;
