import { type StatusBadgeCustomIcon } from '@alfalab/core-components-status-badge/cssm';
type GetCustomIcons = StatusBadgeCustomIcon | null;
export declare const useCustomIcons: () => {
    getCustomIcons: (getBadgeIcons?: StatusBadgeCustomIcon) => GetCustomIcons;
};
export {};
