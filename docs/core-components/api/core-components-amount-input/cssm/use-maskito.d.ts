import { type Ref } from 'react';
import { type MaskitoElementPredicate, type MaskitoOptions } from '@maskito/core';
export declare const useMaskito: ({ options, elementPredicate, }?: {
    options?: MaskitoOptions | null;
    elementPredicate?: MaskitoElementPredicate;
}) => Ref<HTMLElement>;
