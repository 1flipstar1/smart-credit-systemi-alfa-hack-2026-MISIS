import React from 'react';
import { type TabsProps } from '../../typings';
export type TabsResponsiveProps = Omit<TabsProps, 'TabList' | 'collapsedTabsIds'>;
export declare const TabsResponsive: ({ view, scrollable, breakpoint, client, defaultMatchMediaValue, ...restProps }: TabsResponsiveProps) => React.JSX.Element;
