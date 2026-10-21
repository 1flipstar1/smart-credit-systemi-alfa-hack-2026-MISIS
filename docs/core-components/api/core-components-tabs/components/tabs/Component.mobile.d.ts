import React from 'react';
import { type TabsProps } from '../../typings';
export type TabsMobileProps = Omit<TabsProps, 'TabList' | 'collapsedTabsIds'>;
export declare const TabsMobile: ({ view, scrollable, ...restProps }: TabsMobileProps) => React.JSX.Element;
