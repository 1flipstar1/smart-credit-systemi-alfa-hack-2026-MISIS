export type PureCellContextValue = {
    /** Направление */
    direction?: 'horizontal' | 'vertical';
    dataTestId?: string;
    setMainHover?: () => void;
    unsetMainHover?: () => void;
};
export declare const PureCellContext: import("react").Context<PureCellContextValue>;
