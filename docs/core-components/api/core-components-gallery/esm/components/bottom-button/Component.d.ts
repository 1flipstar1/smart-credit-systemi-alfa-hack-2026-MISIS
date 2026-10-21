import React, { type MouseEvent } from 'react';
import { type TBottomButton } from '../../types';
type Props = {
    onClick: (e: MouseEvent) => void;
    className?: string;
    bottomButton: TBottomButton;
};
export declare const BottomButton: ({ onClick, className, bottomButton }: Props) => React.JSX.Element;
export {};
