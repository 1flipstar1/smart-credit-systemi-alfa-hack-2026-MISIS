import React, { type FC } from 'react';
import { type FileUploadItemProps } from './types/file-upload-item-props';
export declare const FileUploadItemComponent: FC<FileUploadItemProps>;
export declare const FileUploadItem: React.FC<FileUploadItemProps> & {
    StatusControl: () => React.JSX.Element;
    Content: () => React.JSX.Element;
    Actions: () => React.JSX.Element;
};
