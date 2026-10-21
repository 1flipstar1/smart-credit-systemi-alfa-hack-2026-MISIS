import { type GalleryImage, type ImageMeta } from '../types';
export declare const PLACEHOLDER_WIDTH = 400;
export declare const PLACEHOLDER_HEIGHT = 300;
export declare const getImageKey: ({ name, src }: GalleryImage, index: number) => string;
export declare const getImageAlt: ({ alt, name }: GalleryImage, index: number) => string;
export declare const isSmallImage: (meta?: ImageMeta) => boolean;
export declare const isVideo: (url: string | undefined) => boolean;
