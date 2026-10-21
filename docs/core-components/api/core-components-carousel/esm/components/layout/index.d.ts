import { type ReactNode } from 'react';
import { type LayoutProps, type PaginationProps } from '../../types';
import { type CarouselNavigationProps } from '../navigation';
export type CarouselLayoutProps<T extends PaginationProps> = LayoutProps<{
    navigationDisplay: 'hover' | 'always' | 'never';
}, T, CarouselNavigationProps>;
export declare function CarouselLayout<T extends PaginationProps>({ layoutProps: { navigationDisplay }, Navigation, navigationProps, Pagination, paginationProps, children, }: CarouselLayoutProps<T>): ReactNode;
