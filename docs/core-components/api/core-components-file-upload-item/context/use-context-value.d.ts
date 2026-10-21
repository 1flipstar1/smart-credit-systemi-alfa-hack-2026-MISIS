import { type ContextType } from 'react';
import { type FileUploadItemProps } from '../types/file-upload-item-props';
import { type FileUploadItemContext } from './file-upload-item-context';
type UseContextValueProps = Omit<FileUploadItemProps, 'className' | 'dataTestId' | 'children'>;
export declare const useContextValue: (props: UseContextValueProps) => ContextType<typeof FileUploadItemContext>;
export {};
