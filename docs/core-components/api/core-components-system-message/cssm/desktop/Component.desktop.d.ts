import React from 'react';
import { Caption } from '../components/caption';
import { Controls } from '../components/controls';
import { Graphic } from '../components/graphic';
import { Subtitle } from '../components/subtitle';
import { Title } from '../components/title';
import { type SystemMessageDesktopProps } from '../types';
declare const SystemMessageDesktopComponent: React.FC<SystemMessageDesktopProps>;
export declare const SystemMessageDesktop: React.FC<SystemMessageDesktopProps> & {
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
export { SystemMessageDesktopComponent as SystemMessageComponentDesktop, Caption as SystemMessageCaptionDesktop, Controls as SystemMessageControlsDesktop, Graphic as SystemMessageGraphicDesktop, Subtitle as SystemMessageSubtitleDesktop, Title as SystemMessageTitleDesktop, };
