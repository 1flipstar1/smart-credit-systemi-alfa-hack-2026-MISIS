import { type FC } from 'react';
import { type PaginationProps } from '../../Component';
type DefaultViewProps = Pick<PaginationProps, 'sidePadding' | 'activePadding' | 'pagesCount' | 'currentPageIndex' | 'onPageChange'>;
export declare const DefaultView: FC<DefaultViewProps>;
export {};
