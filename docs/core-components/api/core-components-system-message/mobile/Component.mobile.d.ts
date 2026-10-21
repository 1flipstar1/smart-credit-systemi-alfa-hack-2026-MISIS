import React from 'react';
import { Caption } from '../components/caption';
import { Controls } from '../components/controls';
import { Graphic } from '../components/graphic';
import { Subtitle } from '../components/subtitle';
import { Title } from '../components/title';
import { type SystemMessageMobileProps } from '../types';
declare const SystemMessageMobileComponent: React.FC<SystemMessageMobileProps>;
export declare const SystemMessageMobile: React.FC<SystemMessageMobileProps> & {
    Graphic: React.FC<{
        className?: string;
        children: React.ReactNode;
        padding?: import("@alfalab/core-components-types").PaddingType;
    }>;
    Title: React.FC<{
        className?: string;
        tag?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "div";
        children: React.ReactNode;
        padding?: import("@alfalab/core-components-types").PaddingType;
    }>;
    Subtitle: React.FC<{
        className?: string;
        children: React.ReactNode;
        padding?: import("@alfalab/core-components-types").PaddingType;
    }>;
    Caption: React.FC<{
        className?: string;
        children: React.ReactNode;
        padding?: import("@alfalab/core-components-types").PaddingType;
    }>;
    Controls: React.FC<{
        direction?: "column" | "row";
        className?: string;
        children: React.ReactNode;
        padding?: import("@alfalab/core-components-types").PaddingType;
    }>;
};
export { SystemMessageMobileComponent as SystemMessageComponentMobile, Caption as SystemMessageCaptionMobile, Controls as SystemMessageControlsMobile, Graphic as SystemMessageGraphicMobile, Subtitle as SystemMessageSubtitleMobile, Title as SystemMessageTitleMobile, };
