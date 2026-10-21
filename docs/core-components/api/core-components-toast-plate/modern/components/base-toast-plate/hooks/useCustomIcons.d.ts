import { type StatusBadgeCustomIcon } from '@alfalab/core-components-status-badge/modern';
type GetCustomIcons = StatusBadgeCustomIcon | null;
export declare const useCustomIcons: () => {
    getCustomIcons: (getBadgeIcons?: StatusBadgeCustomIcon) => GetCustomIcons;
};
export {};
