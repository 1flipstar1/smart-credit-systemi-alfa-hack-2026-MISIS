type Params = {
    open: boolean;
    delay: number;
    onTimeout: () => void;
};
export declare const useTimer: ({ open, delay, onTimeout }: Params) => {
    start: () => void;
    stop: () => void;
};
export {};
