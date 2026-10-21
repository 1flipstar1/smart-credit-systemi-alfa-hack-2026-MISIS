import { type FileUploadItemStatus } from './types/status';
export declare const getExtension: (filename: string) => string | undefined;
export declare const isInitialStatus: (status?: FileUploadItemStatus) => status is "INITIAL";
export declare const isSuccessStatus: (status?: FileUploadItemStatus) => status is "SUCCESS";
export declare const isErrorStatus: (status?: FileUploadItemStatus) => status is "ERROR";
export declare const isUploadingStatus: (status?: FileUploadItemStatus) => status is "UPLOADING";
export declare const isUploadedStatus: (status?: FileUploadItemStatus) => status is "UPLOADED";
export declare const isLoadingStatus: (status?: FileUploadItemStatus) => status is "LOADING";
