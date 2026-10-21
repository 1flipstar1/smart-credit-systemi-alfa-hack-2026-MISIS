import { type ReactNode } from 'react';
import { type CarouselProps, type PaginationProps } from './types';
export declare function Carousel<T extends PaginationProps>({ navigation, navigationPosition, Pagination, paginationProps, ...restProps }: CarouselProps<T>): ReactNode;
