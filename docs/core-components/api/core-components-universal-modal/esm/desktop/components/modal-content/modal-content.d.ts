import { type FC } from 'react';
import { type BaseModalProps } from '@alfalab/core-components-base-modal/esm';
import { type UniversalModalDesktopProps } from '../../types/props';
type PickedBaseModalProps = Pick<BaseModalProps, 'children'>;
type PickedUniversalModalDesktopProps = Pick<UniversalModalDesktopProps, 'height' | 'scrollableContainerRef'>;
type Props = PickedBaseModalProps & PickedUniversalModalDesktopProps;
export declare const ModalContent: FC<Props>;
export {};
