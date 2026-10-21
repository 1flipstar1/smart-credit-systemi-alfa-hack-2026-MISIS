import { type FC, type MutableRefObject } from 'react';
import { type IconButtonProps } from '@alfalab/core-components-icon-button';
import { type GalleryCustomButton } from '../../types';
type Props = Omit<IconButtonProps, 'icon' | 'colors'> & {
    buttonRef?: MutableRefObject<HTMLButtonElement | null>;
    download?: string | boolean;
};
type CustomButtonProps = GalleryCustomButton & Props;
export declare const Fullscreen: FC<Props>;
export declare const BackArrow: FC<Props>;
export declare const Play: FC<Props>;
export declare const Pause: FC<Props>;
export declare const ExitFullscreen: FC<Props>;
export declare const MuteVideo: FC<Props>;
export declare const UnmuteVideo: FC<Props>;
export declare const Download: FC<Props & {
    href?: string;
}>;
export declare const Share: FC<Props>;
export declare const CustomButton: FC<CustomButtonProps>;
export declare const Exit: FC<Props>;
export {};
