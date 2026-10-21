import { type FC } from 'react';
import { type PaginationProps } from '../../Component';
type PerPageViewProps = Pick<PaginationProps, 'pagesCount' | 'currentPageIndex'>;
export declare const PerPageView: FC<PerPageViewProps>;
export {};
