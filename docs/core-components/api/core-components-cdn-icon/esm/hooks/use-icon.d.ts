export declare enum LoadingStatus {
    INITIAL = 0,
    SUCCESS = 1,
    FAILURE = 2
}
export declare function useIcon(name: string, baseUrl: string): [icon: string | undefined, status: LoadingStatus];
