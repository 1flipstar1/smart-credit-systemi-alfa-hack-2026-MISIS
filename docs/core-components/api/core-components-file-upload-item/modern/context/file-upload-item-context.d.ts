import { type FileUploadItemProps } from '../types/file-upload-item-props';
interface ContextType extends Pick<FileUploadItemProps, 'showRestore' | 'uploadStatus' | 'error' | 'title' | 'subtitle' | 'subtitleColor' | 'uploadDate' | 'size' | 'id' | 'onDownload' | 'onDelete' | 'onRestore' | 'downloadLink' | 'download' | 'disableButtons' | 'isClickable' | 'target' | 'showDelete' | 'customIcon' | 'iconStyle' | 'progressBar' | 'progressBarAvailable' | 'customContent' | 'truncate' | 'imageUrl' | 'backgroundColor' | 'reupload'> {
    actionsPresent?: boolean;
}
export declare const FileUploadItemContext: import("react").Context<ContextType>;
export declare const useFileUploadItemContext: () => ContextType;
export {};
