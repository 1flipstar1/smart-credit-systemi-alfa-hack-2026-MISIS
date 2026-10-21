import React, { type ComponentType, type SVGProps } from 'react';
import { type PickerButtonVariant } from '../types';
export declare const getCompactIcon: (size: string, Icon?: ComponentType<SVGProps<SVGSVGElement>>) => React.ComponentType<React.SVGProps<SVGSVGElement>> | ((props: SVGProps<SVGSVGElement>) => React.JSX.Element);
export declare const getIcon: (variant: PickerButtonVariant, size: string, Icon?: ComponentType<SVGProps<SVGSVGElement>>) => ComponentType<SVGProps<SVGSVGElement>>;
