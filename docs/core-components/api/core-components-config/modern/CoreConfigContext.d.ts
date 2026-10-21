/// <reference types="react" />
export declare type CoreConfigContextValue = {
    breakpoint: number;
    client: 'desktop' | 'mobile';
    getPortalContainer?: () => Element | null | undefined;
};
export declare const CoreConfigContext: import("react").Context<CoreConfigContextValue>;
export declare const useCoreConfig: (overrides?: Partial<CoreConfigContextValue>) => {
    breakpoint: number;
    client: 'desktop' | 'mobile';
    getPortalContainer?: (() => Element | null | undefined) | undefined;
};
