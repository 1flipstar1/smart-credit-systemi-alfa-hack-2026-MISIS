import React from 'react';
import { type TabListProps } from '../../typings';
export type PrimaryTabListMobileProps = Omit<TabListProps, 'size' | 'collapsedTabsIds'>;
export declare const PrimaryTabListMobile: (props: PrimaryTabListMobileProps) => React.JSX.Element;
