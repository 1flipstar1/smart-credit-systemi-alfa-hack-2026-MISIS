import { type FC } from 'react';
import { type GalleryImage } from '../../types';
type Props = {
    image: GalleryImage;
    index: number;
    active?: boolean;
    onSelect: (index: number) => void;
    className: string;
};
export declare const ImagePreview: FC<Props>;
export {};
