import React from 'react';
import { type TabsProps } from '../../typings';
export type TabsCollapsibleProps = Omit<TabsProps, 'TabList' | 'fullWidthScroll' | 'scrollable' | 'view'>;
export declare const TabsCollapsible: ({ ...restProps }: TabsCollapsibleProps) => React.JSX.Element;
