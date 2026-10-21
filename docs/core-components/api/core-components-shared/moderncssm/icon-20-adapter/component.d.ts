import React, { type FC, type ForwardRefExoticComponent, type RefAttributes, type SVGProps } from 'react';
export interface Icon20AdapterProps extends SVGProps<SVGSVGElement> {
    icon: FC<SVGProps<SVGSVGElement>> | ForwardRefExoticComponent<SVGProps<SVGSVGElement> & RefAttributes<SVGSVGElement>>;
}
export declare const Icon20Adapter: React.ForwardRefExoticComponent<Omit<Icon20AdapterProps, "ref"> & React.RefAttributes<SVGSVGElement>>;
