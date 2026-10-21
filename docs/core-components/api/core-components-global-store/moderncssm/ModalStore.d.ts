export declare type SavedStyle = {
    value: string;
    key: string;
    el: HTMLElement;
};
declare type RestoreStyle = {
    container: HTMLElement;
    modals: number;
    styles: SavedStyle[];
};
export declare class ModalStore {
    private readonly restoreStyles;
    constructor();
    getRestoreStyles: () => RestoreStyle[];
}
export {};
