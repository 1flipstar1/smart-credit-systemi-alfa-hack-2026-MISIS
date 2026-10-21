import { type KeyboardEvent, type MouseEvent, type MutableRefObject } from 'react';
import { type UseTabsProps } from '../typings';
export declare function useTabs({ titles, selectedId, onChange }: UseTabsProps): {
    getTabListItemProps: (index: number, outerRef?: MutableRefObject<HTMLElement>) => {
        role: string;
        tabIndex: number;
        'aria-selected': boolean;
        selected: boolean;
        dataTestId: string | undefined;
        disabled: boolean | undefined;
        ref: (instance: HTMLElement | null) => void | import("react").DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES[keyof import("react").DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES];
        onKeyDown: (event: KeyboardEvent<HTMLButtonElement>) => void;
        onClick: (event?: MouseEvent) => void;
    };
    selectedTab: HTMLButtonElement | null;
    focusedTab: HTMLButtonElement | null;
};
