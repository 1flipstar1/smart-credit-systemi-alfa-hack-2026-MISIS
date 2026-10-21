import React, { type FC, type SVGProps } from 'react';
import { type OptionProps as BaseOptionProps, type OptionShape } from '@alfalab/core-components-select/moderncssm/shared';
type OptionProps = Omit<BaseOptionProps, 'option'> & {
    option: OptionShape & {
        icon?: FC<SVGProps<SVGSVGElement>>;
    };
};
export declare const Option: ({ option, children, ...restProps }: OptionProps) => React.JSX.Element;
export {};
