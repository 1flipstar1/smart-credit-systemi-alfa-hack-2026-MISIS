import { type FC } from 'react';
import { type ContentDesktopProps } from '../../../desktop';
import { type ContentMobileProps } from '../../../mobile';
export interface ContentResponsiveProps extends ContentDesktopProps, ContentMobileProps {
}
export declare const ContentResponsive: FC<ContentResponsiveProps>;
