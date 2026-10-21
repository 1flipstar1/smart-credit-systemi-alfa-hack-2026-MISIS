import { type ClientRect, type Modifier } from '@dnd-kit/core';
import { type Transform } from '@dnd-kit/utilities';
export declare const restrictToParentElement: Modifier;
export declare function restrictToBoundingRect(transform: Transform, rect: ClientRect, boundingRect: ClientRect): Transform;
export declare const restrictToVerticalAxis: Modifier;
export declare function getSortableListTestIds(dataTestId: string, index: number): {
    sortableList: string;
    item: string;
};
