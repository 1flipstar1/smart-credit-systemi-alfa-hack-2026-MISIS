import { type FC } from 'react';
import { type Plate, type PlateProps } from '@alfalab/core-components-plate/esm';
import { type PlateDesktop } from '@alfalab/core-components-plate/esm/desktop';
import { type PlateMobile } from '@alfalab/core-components-plate/esm/mobile';
export type AlertProps = Omit<PlateProps, 'foldable' | 'defaultFolded' | 'leftAddons'>;
type AlertPrivateProps = {
    Plate: typeof Plate | typeof PlateDesktop | typeof PlateMobile;
};
export declare const AlertBase: FC<AlertProps & AlertPrivateProps>;
export {};
