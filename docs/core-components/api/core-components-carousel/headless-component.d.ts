import { type ReactNode } from 'react';
import { type HeadlessCarouselProps } from './types';
export declare function HeadlessCarousel<T, U, V>({ activeIndex: activeIndexFromProps, defaultActiveIndex, onActiveIndexChange, visibleItems: visibleItemsFromProps, gap, height, minHeight, items, colors, Layout, layoutProps, Navigation, navigationProps, Pagination, paginationProps, Wrapper, Item, overflow, mouseWheel, touchMoveStopPropagation, captureEvent, loop, shortSwipe, longSwipeTimeMs, }: HeadlessCarouselProps<T, U, V>): ReactNode;
