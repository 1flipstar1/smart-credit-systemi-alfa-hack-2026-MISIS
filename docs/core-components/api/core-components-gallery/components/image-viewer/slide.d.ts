import { type FC } from 'react';
import { type GalleryImage, type ImageMeta } from '../../types';
type SlideProps = {
    isActive: boolean;
    image: GalleryImage;
    meta?: ImageMeta;
    containerAspectRatio: number;
    imageAspectRatio: number;
    index: number;
    containerHeight: number;
    slideVisible: boolean;
    fullScreen?: boolean;
};
export declare const Slide: FC<SlideProps>;
export {};
