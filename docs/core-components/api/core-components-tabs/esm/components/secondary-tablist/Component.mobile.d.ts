import React from 'react';
import { type SecondaryTabListProps } from '../../typings';
export type SecondaryTabListMobileProps = Omit<SecondaryTabListProps, 'tagSize'>;
export declare const SecondaryTabListMobile: ({ className, size, tagView, ...restProps }: SecondaryTabListMobileProps) => React.JSX.Element;
