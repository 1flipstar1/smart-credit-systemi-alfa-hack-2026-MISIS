export interface DownloadOptions {
    url: string;
    fileName?: string;
    fileType?: string;
}
export declare const downloadFile: ({ url, fileName, fileType, }: DownloadOptions) => Promise<void>;
