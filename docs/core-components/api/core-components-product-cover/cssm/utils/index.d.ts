export declare function getProductCoverSingleTestIds(dataTestId: string): {
    productCoverSingle: string;
    userInfo: string;
    userInfoEye: string;
};
export declare function getProductCoverStackTestIds(dataTestId: string): {
    productCoverStack: string;
    firstCard: string;
    secondCard: string;
    userInfoFirstCard: string;
    userInfoSecondCard: string;
};
export declare const showNumberOfCards: (sizeCard: number, numberOfCards?: number, align?: string) => boolean;
export declare const getSizeSecondCard: (size: number, align: string) => number;
