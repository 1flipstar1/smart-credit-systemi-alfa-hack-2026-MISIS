import React from 'react';
import { type BaseCodeInputProps, type CustomInputRef } from '../typings';
export type CodeInputDesktopProps = Omit<BaseCodeInputProps, 'stylesInput'>;
export declare const CodeInputDesktop: React.ForwardRefExoticComponent<CodeInputDesktopProps & React.RefAttributes<CustomInputRef>>;
