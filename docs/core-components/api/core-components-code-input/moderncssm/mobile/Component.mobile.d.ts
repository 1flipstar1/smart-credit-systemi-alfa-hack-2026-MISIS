import React from 'react';
import { type BaseCodeInputProps, type CustomInputRef } from '../typings';
export type CodeInputMobileProps = Omit<BaseCodeInputProps, 'stylesInput'>;
export declare const CodeInputMobile: React.ForwardRefExoticComponent<CodeInputMobileProps & React.RefAttributes<CustomInputRef>>;
