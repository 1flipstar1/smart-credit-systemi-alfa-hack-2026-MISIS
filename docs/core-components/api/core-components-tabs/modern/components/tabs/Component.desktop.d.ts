import React from 'react';
import { type TabsProps } from '../../typings';
export type TabsDesktopProps = Omit<TabsProps, 'TabList' | 'fullWidthScroll' | 'breakpoint' | 'collapsedTabsIds'>;
export declare const TabsDesktop: ({ view, scrollable, size, ...restProps }: TabsDesktopProps) => React.JSX.Element;
