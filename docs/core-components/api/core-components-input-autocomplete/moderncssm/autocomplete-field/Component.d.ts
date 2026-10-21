import React from 'react';
import { type FieldProps } from '@alfalab/core-components-select/moderncssm/shared';
import { type InputAutocompleteCommonProps } from '../types';
export type AutocompleteFieldProps = FieldProps & Pick<InputAutocompleteCommonProps, 'Input' | 'inputProps' | 'value' | 'onInput' | 'readOnly'>;
export declare const AutocompleteField: ({ label, labelView, placeholder, size, Arrow, Input, value, error, success, hint, disabled, readOnly, onInput, inputProps, innerProps, dataTestId, }: AutocompleteFieldProps) => React.JSX.Element;
